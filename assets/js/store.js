/* Estado del usuario y sincronización con Supabase.
   - Sin configurar Supabase (assets/js/config.js vacío): modo local, el progreso vive en localStorage.
   - Con Supabase: login con email y contraseña; el progreso se guarda en la tabla `progress`
     (una fila por usuario, con control de versiones mediante save_progress, ver supabase/schema.sql)
     y en localStorage como copia local. Cada nivel terminado se añade a la tabla `level_results`. */
(function (g) {
  const CFG = g.SINTAXIS_CONFIG || {};
  const SDK = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';
  const MAXH = 10;

  const fresh = () => ({
    v: 3, course: 'python', locale: null, xp: 0, hearts: MAXH, heartsTs: 0,
    streak: 0, maxStreak: 0, lastDay: null, daily: { day: null, xp: 0 }, goal: 30,
    done: {}, courseXp: {}, sound: true, savedAt: 0,
    stats: { answered: 0, correct: 0, lessons: 0, perfect: 0, extras: 0, retos: 0 },
  });

  // Une dos copias del progreso del mismo usuario (la local y la de la nube) sin perder nada.
  function merge(a, b) {
    if (!b || b.v !== 3) return a;
    if (!a || !a.savedAt) return Object.assign(fresh(), b);
    const newer = (a.savedAt || 0) >= (b.savedAt || 0) ? a : b;
    const older = newer === a ? b : a;
    const m = Object.assign(fresh(), JSON.parse(JSON.stringify(newer)));
    m.done = Object.assign({}, older.done, newer.done);
    m.xp = Math.max(a.xp || 0, b.xp || 0);
    for (const k in m.stats) m.stats[k] = Math.max(a.stats?.[k] || 0, b.stats?.[k] || 0);
    const keys = new Set([...Object.keys(a.courseXp || {}), ...Object.keys(b.courseXp || {})]);
    m.courseXp = {};
    keys.forEach(k => { m.courseXp[k] = Math.max(a.courseXp?.[k] || 0, b.courseXp?.[k] || 0); });
    m.maxStreak = Math.max(a.maxStreak || 0, b.maxStreak || 0);
    const s = (a.lastDay || '') >= (b.lastDay || '') ? a : b;
    m.streak = s.streak; m.lastDay = s.lastDay;
    if (a.daily?.day && a.daily.day === b.daily?.day) m.daily = { day: a.daily.day, xp: Math.max(a.daily.xp, b.daily.xp) };
    return m;
  }

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

    on(fn) { this._listeners.push(fn); },
    emit(ev, data) { this._listeners.forEach(f => f(ev, data)); },
    key() { return 'sintaxis.v3.' + (this.user ? this.user.id : 'local'); },
    readLocal() {
      try { const s = JSON.parse(localStorage.getItem(this.key())); if (s && s.v === 3) return s; } catch (e) { /* sin almacenamiento */ }
      return null;
    },
    writeLocal() { try { localStorage.setItem(this.key(), JSON.stringify(this.state)); } catch (e) { /* sin almacenamiento */ } },
    use(s) {
      const st = Object.assign(fresh(), s || {});
      st.stats = Object.assign(fresh().stats, st.stats);
      this.state = st;
      return st;
    },
    reset() { const keep = { course: this.state.course, locale: this.state.locale }; this.use(Object.assign(fresh(), keep)); this.save(); },
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
      catch (e) { this.configured = false; this.use(this.readLocal()); this.setSync('err'); return { needsAuth: false, sdkError: true }; }
      this.client = g.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      });
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
        q.push(r);
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
      const { error } = await this.client.from('level_results').insert(q.map(r => Object.assign({}, r, { user_id: this.user.id })));
      this._flushing = false;
      if (error) return;
      try { localStorage.setItem(key, JSON.stringify(JSON.parse(localStorage.getItem(key) || '[]').slice(q.length))); } catch (e) { /* */ }
    },

    /* Sugerencias. Con sesión iniciada se guardan en la tabla `suggestions` (schema.sql).
       Sin Supabase, o si esa tabla aún no existe, devuelve un enlace para abrirla como incidencia
       en GitHub (config.feedbackUrl, que el workflow rellena solo). Sin ninguno de los dos: Error('off'). */
    async sendSuggestion(row) {
      if (this.user && this.client) {
        const { error } = await this.client.from('suggestions').insert(row);
        if (!error) return { via: 'db' };
        // Tabla inexistente (schema.sql antiguo): se intenta por GitHub. Cualquier otro error se muestra.
        if (!/PGRST205|42P01/.test(error.code || '')) throw error;
      }
      const base = CFG.feedbackUrl;
      if (!base) throw new Error('off');
      const title = `[${row.kind}] ${row.message.replace(/\s+/g, ' ').slice(0, 70)}`;
      const body = row.message + (row.course ? `\n\n---\n${row.course} · día ${row.day} · ${row.locale}` : `\n\n---\n${row.locale}`);
      return { via: 'github', url: `${base}${base.includes('?') ? '&' : '?'}title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}` };
    },

    async signIn(email, password) {
      const { data, error } = await this.client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await this.startUser(data.user);
    },
    async signUp(email, password) {
      const { data, error } = await this.client.auth.signUp({
        email, password, options: { emailRedirectTo: location.origin + location.pathname },
      });
      if (error) throw error;
      if (data.session) { await this.startUser(data.user); return 'in'; }
      return 'confirm';
    },
    async sendReset(email) {
      const { error } = await this.client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      if (error) throw error;
    },
    async updatePassword(password) {
      const { error } = await this.client.auth.updateUser({ password });
      if (error) throw error;
    },
    async signOut() {
      if (this._timer) { clearTimeout(this._timer); await this.push(); }
      await this.client.auth.signOut();
      this.user = null;
    },
  };

  g.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') Store.flush(); });
  g.addEventListener('online', () => { if (Store.user) Store.push(); });
  g.SintaxisStore = Store;
})(window);
