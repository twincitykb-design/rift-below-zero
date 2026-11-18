const SUPABASE_URL = 'https://kizjnsbmrknvmvajzaz.supabase.co?;
const SUPABASE_KEY = 'sb_publishable_qVlRGfStVG1ZVxiybW8wXQ_4sUu_Y6t';
function connect(){if(SUPABASE_URL.includes('YOUR-')||SUPABASE_KEY.includes('YOUR-'))throw Error('Host has not configured Supabase yet.');return supabase.createClient(SUPABASE_URL,SUPABASE_KEY);}
