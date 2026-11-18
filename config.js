const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR-PUBLISHABLE-OR-ANON-KEY';
function connect(){if(SUPABASE_URL.includes('YOUR-')||SUPABASE_KEY.includes('YOUR-'))throw Error('Host has not configured Supabase yet.');return supabase.createClient(SUPABASE_URL,SUPABASE_KEY);}
