/* Configuración de Supabase.
   Déjalo vacío para usar la app en modo local (el progreso se guarda solo en el navegador).
   Para guardar el progreso de cada usuario en la nube, pega aquí la URL del proyecto y la clave "anon public"
   (Supabase > Project Settings > API). Esa clave es pública por diseño: la seguridad la dan las políticas RLS
   de supabase/schema.sql. Nunca pongas aquí la clave "service_role".
   Si despliegas con GitHub Actions, también puedes definir las variables SUPABASE_URL y SUPABASE_ANON_KEY
   del repositorio y el workflow generará este archivo.
   feedbackUrl: página donde se abren las sugerencias si no hay Supabase, por ejemplo
   'https://github.com/TU-USUARIO/nibble/issues/new'. Al publicar con el workflow se rellena sola. */
window.SINTAXIS_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: '',
  feedbackUrl: '',
  // Botón "Continuar con Google" en la pantalla de acceso. Ponlo a false si no activas Google en
  // Supabase (Authentication > Sign In / Providers > Google).
  google: true,
};
