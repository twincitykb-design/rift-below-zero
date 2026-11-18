
const SUPABASE_URL = 'https://kizjnsbmrknvmvajzaz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_qVlRGfStVG1ZVxiybW8wXQ_4sUu_Y6t';

let supabaseClient;

function connect() {
    if (!window.supabase) {
        throw new Error('Supabase library failed to load');
    }

    if (!supabaseClient) {
        supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );
    }

    return supabaseClient;
}
