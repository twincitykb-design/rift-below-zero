const SUPABASE_URL = 'https://kizjnsbmrknvmvajzaz.supabase.co?;
const SUPABASE_KEY = 'sb_publishable_qVlRGfStVG1ZVxiybW8wXQ_4sUu_Y6t';
function connect() {
    if (!window.supabase) {
        throw new Error('Supabase library failed to load');
    }

    return window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
}
