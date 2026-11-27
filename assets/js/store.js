/* Estado del usuario y sincronización con Supabase.
   - Sin configurar Supabase (assets/js/config.js vacío): modo local, el progreso vive en localStorage.
   - Con Supabase: login con email y contraseña; el progreso se guarda en la tabla `progress`
     (una fila por usuario, con control de versiones mediante save_progress, ver supabase/schema.sql)
     y en localStorage como copia local. Cada nivel terminado se añade a la tabla `level_results`. */
(function (g) {
  const CFG = g.SINTAXIS_CONFIG || {};
  // El SDK necesita solo la dirección del proyecto (https://xxxx.supabase.co): si se copió con /rest/v1/
  // u otra ruta detrás, se quita; con ella, el inicio de sesión iría a una dirección que no existe.
  try { if (CFG.supabaseUrl) CFG.supabaseUrl = new URL(CFG.supabaseUrl).origin; } catch (e) { CFG.supabaseUrl = ''; }
  // Copia propia de supabase-js (sin CDN en tiempo de ejecución; licencia MIT, ver THIRD_PARTY_NOTICES.md).
  const SDK = 'assets/vendor/supabase-js-2.45.4.min.js';
  const P = g.NibbleProgress;
  const MAXH = P.MAXH, fresh = P.fresh, merge = P.merge;
  const uuid = () => (g.crypto && crypto.randomUUID ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3) | 8).toString(16); }));
  const LAST_USER = 'nibble.lastUser';
  // Identificador de este navegador para sus contadores (ver progress.js). No identifica a la persona.
  const device = () => { try { let d = localStorage.getItem('nibble.device'); if (!d) { d = uuid().slice(0, 8); localStorage.setItem('nibble.device', d); } return d; } catch (e) { return 'nostore'; } };

  const Store = {
    MAXH,
    cfg: CFG,
    configured: !!(CFG.supabaseUrl && CFG.supabaseAnonKey),
    client: null,
    user: null,
    state: fresh(),
    sync: 'local',
    _listeners: [],
    _timer: null,
    dev: device(),
    uid: null, // sin red al arrancar: usuario de la última sesión, para usar su copia local

    on(fn) { this._listeners.push(fn); },
    emit(ev, data) { this._listeners.forEach(f => f(ev, data)); },
    key() { return 'sintaxis.v3.' + (this.user ? this.user.id : this.uid || 'local'); },
    readLocal() {
      try { const s = JSON.parse(localStorage.getItem(this.key())); if (s && (s.v === 3 || s.v === P.V)) return s; /* una v3 la convierte upgrade() al usarla */ } catch (e) { /* sin almacenamiento */ }
      return null;
    },
    writeLocal() { try { localStorage.setItem(this.key(), JSON.stringify(this.state)); } catch (e) { /* sin almacenamiento */ } },
    use(s) { this.state = P.totals(P.upgrade(s)); return this.state; },
    // resetAt hace que las copias anteriores (otros dispositivos, la nube) no devuelvan el progreso borrado.
    reset() {
      // Se conservan las preferencias (no son progreso): curso, idioma, tema, sonido, letra, animaciones y bienvenida.
      const { course, locale, theme, sound, font, motion, codeTheme, onboarded, remind } = this.state;
      this.use(Object.assign(fresh(), { course, locale, theme, sound, font, motion, codeTheme, onboarded, remind, resetAt: Date.now() }));
      this.save();
    },
    save() {
      this.state.savedAt = Date.now();
      this.writeLocal();
      if (this.user) { clearTimeout(this._timer); this._timer = setTimeout(() => this.push(), 1200); }
    },
    flush() { if (this._timer) { clearTimeout(this._timer); this._timer = null; this.push(); } },
    setSync(s) { this.sync = s; this.emit('sync', s); },

    async loadSdk() {
      if (g.supabase) return;
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = SDK; s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
    },

    /* Devuelve { needsAuth } */
    async init() {
      if (!this.configured) { this.use(this.readLocal()); this.setSync('local'); return { needsAuth: false }; }
      try { await this.loadSdk(); }
      catch (e) {
        // Sin red: se sigue con la copia local del último usuario, que se subirá en la próxima visita con red.
        this.configured = false;
        try { this.uid = localStorage.getItem(LAST_USER); } catch (er) { /* */ }
        this.use(this.readLocal()); this.setSync('err'); return { needsAuth: false, sdkError: true };
      }
      this.client = g.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      });
      // Proveedores activos en Supabase (para no enseñar "Continuar con Google" si no está activado).
      // Sin red o si falla, providers queda en null y el botón se muestra igual.
      this.providers = await fetch(CFG.supabaseUrl + '/auth/v1/settings', { headers: { apikey: CFG.supabaseAnonKey } })
        .then(r => (r.ok ? r.json() : null)).then(j => (j && j.external) || null).catch(() => null);
      this.client.auth.onAuthStateChange((ev) => {
        if (ev === 'PASSWORD_RECOVERY') this.emit('recovery');
        if (ev === 'SIGNED_OUT') { this.user = null; this.emit('signedout'); }
      });
      try {
        const { data } = await this.client.auth.getSession();
        if (data.session) { await this.startUser(data.session.user); return { needsAuth: false }; }
      } catch (e) { /* sin red o sesión corrupta: se pide entrar de nuevo */ }
      return { needsAuth: true };
    },

    async startUser(user) {
      this.user = user;
      this.rev = 0;
      try { localStorage.setItem(LAST_USER, user.id); } catch (e) { /* */ }
      this.use(this.readLocal());
      if (await this.pull()) await this.push();
    },

    // Lee la copia de la nube y la combina con la local. Devuelve false si falla.
    async pull() {
      if (!this.user) return false;
      this.setSync('busy');
      const { data, error } = await this.client.from('progress').select('state, revision').eq('user_id', this.user.id).maybeSingle();
      if (error) { this.setSync('err'); return false; }
      if (data && data.state) this.use(merge(this.state, data.state));
      this.rev = (data && data.revision) || 0;
      this.writeLocal();
      return true;
    },

    // Guarda con control de versiones (save_progress en schema.sql): si otro dispositivo
    // guardó antes, vuelve a leer, combina y reintenta.
    async push(tries = 0) {
      if (!this.user || !this.client) return;
      this._timer = null;
      this.setSync('busy');
      let { data, error } = await this.client.rpc('save_progress', { p_state: this.state, p_revision: this.rev || 0 });
      if (error && error.code === 'PGRST202') {
        // La base de datos aún no tiene save_progress (schema.sql antiguo): guardado directo.
        ({ error } = await this.client.from('progress').upsert({ user_id: this.user.id, state: this.state }));
        this.setSync(error ? 'err' : 'ok');
        if (!error) this.flushResults();
        return;
      }
      if (error) { this.setSync('err'); return; }
      if (data === null) {
        if (tries < 3 && await this.pull()) return this.push(tries + 1);
        this.setSync('err'); return;
      }
      this.rev = data;
      this.setSync('ok');
      this.flushResults();
    },

    // Historial de niveles terminados (tabla level_results). Se guarda en una cola local
    // y se envía cuando hay conexión, así no se pierde nada sin red.
    resultsKey() { return this.key() + '.results'; },
    logResult(r) {
      if (!this.user) return;
      try {
        const q = JSON.parse(localStorage.getItem(this.resultsKey()) || '[]');
        q.push(Object.assign({ client_id: uuid() }, r));
        localStorage.setItem(this.resultsKey(), JSON.stringify(q.slice(-200)));
      } catch (e) { /* sin almacenamiento */ }
      this.flushResults();
    },
    async flushResults() {
      if (!this.user || !this.client || this._flushing) return;
      let q;
      try { q = JSON.parse(localStorage.getItem(this.resultsKey()) || '[]'); } catch (e) { return; }
      if (!q.length) return;
      this._flushing = true;
      const key = this.resultsKey();
      // client_id es único (schema.sql): si un envío llegó pero se perdió la respuesta, o dos pestañas
      // envían la misma cola, el servidor ignora las filas repetidas.
      const rows = q.map(r => Object.assign({}, r, { user_id: this.user.id }));
      let { error } = await this.client.from('level_results').upsert(rows, { onConflict: 'client_id', ignoreDuplicates: true });
      if (error && /PGRST204|42703|42P10/.test(error.code || '')) {
        // Base de datos sin la columna client_id (schema.sql antiguo): envío normal.
        ({ error } = await this.client.from('level_results').insert(rows.map(({ client_id, day_id, ...r }) => r)));
      }
      this._flushing = false;
      if (error) return;
      try { localStorage.setItem(key, JSON.stringify(JSON.parse(localStorage.getItem(key) || '[]').slice(q.length))); } catch (e) { /* */ }
    },

    /* Medición sin datos personales (tabla events, ver schema.sql): solo tipo, curso, día e idioma.
       Sin usuario, sin identificador y sin cookies. Si falla (sin red, sin la tabla), el evento se pierde. */
    track(type, r = {}) {
      if (!this.client) return;
      this.client.from('events').insert({ type, course: r.course || null, day: r.day || null, locale: r.locale || null })
        .then(() => {}, () => {});
    },

    /* Sugerencias. Con sesión iniciada se guardan en la tabla `suggestions` (schema.sql).
       Sin Supabase, o si esa tabla aún no existe, devuelve un enlace para abrirla como incidencia
       en GitHub (config.feedbackUrl, que el workflow rellena solo). Sin ninguno de los dos: Error('off'). */
    async sendSuggestion(row) {
      if (this.user && this.client) {
        const { error } = await this.client.from('suggestions').insert(row);
        if (!error) return { via: 'db' };
        // Tabla inexistente (schema.sql antiguo): se intenta por GitHub. Cualquier otro error se muestra.
        if (error.hint === 'rate_limit') throw new Error('limit');
        if (!/PGRST205|42P01/.test(error.code || '')) throw error;
      }
      const base = CFG.feedbackUrl;
      if (!base) throw new Error('off');
      const title = `[${row.kind}] ${row.message.replace(/\s+/g, ' ').slice(0, 70)}`;
      const body = row.message + (row.course ? `\n\n---\n${row.course} · día ${row.day} · ${row.locale}` : `\n\n---\n${row.locale}`);
      return { via: 'github', url: `${base}${base.includes('?') ? '&' : '?'}title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}` };
    },

    // Inicio de sesión con Google: Supabase lleva a la página de Google y vuelve a esta misma dirección,
    // donde init() recoge la sesión de la URL (detectSessionInUrl). Requiere activar Google en Supabase.
    async signInGoogle() {
      const { error } = await this.client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
      if (error) throw error;
    },
    // captcha: token de Cloudflare Turnstile (solo si config.js trae captchaSiteKey). Cada token sirve una vez.
    captcha: null,
    takeCaptcha() { const c = this.captcha; this.captcha = null; return c || undefined; },
    async signIn(email, password) {
      const { data, error } = await this.client.auth.signInWithPassword({ email, password, options: { captchaToken: this.takeCaptcha() } });
      if (error) throw error;
      await this.startUser(data.user);
    },
    async signUp(email, password) {
      const { data, error } = await this.client.auth.signUp({
        email, password, options: { emailRedirectTo: location.origin + location.pathname, captchaToken: this.takeCaptcha() },
      });
      if (error) throw error;
      if (data.session) { await this.startUser(data.user); return 'in'; }
      return 'confirm';
    },
    async sendReset(email) {
      const { error } = await this.client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname, captchaToken: this.takeCaptcha() });
      if (error) throw error;
    },
    async updatePassword(password) {
      const { error } = await this.client.auth.updateUser({ password });
      if (error) throw error;
    },
    // scope 'global' cierra la sesión en todos los dispositivos (invalida todas las sesiones de la cuenta).
    async signOut(scope = 'local') {
      if (this._timer) { clearTimeout(this._timer); await this.push(); }
      await this.client.auth.signOut({ scope });
      this.user = null;
      try { localStorage.removeItem(LAST_USER); } catch (e) { /* */ }
    },
  };

  g.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') Store.flush(); });
  g.addEventListener('online', () => { if (Store.user) Store.push(); });
  g.SintaxisStore = Store;
})(window);
