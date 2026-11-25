/* Configuración de Supabase.
   Déjalo vacío para usar la app en modo local (el progreso se guarda solo en el navegador).
   Para guardar el progreso de cada usuario en la nube, pega aquí la URL del proyecto y la clave "anon public"
   (Supabase > Project Settings > API). Esa clave es pública por diseño: la seguridad la dan las políticas RLS
   de supabase/schema.sql. Nunca pongas aquí la clave "service_role".
   Si despliegas con GitHub Actions, también puedes definir las variables SUPABASE_URL y SUPABASE_ANON_KEY
   del repositorio y el workflow generará este archivo. */
window.SINTAXIS_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: '',
};
