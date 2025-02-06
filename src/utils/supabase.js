
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('url', supabaseUrl);

export default supabase

export async function signUp(email, password, name, surname) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { name, surname }
        }
    });

    if (error) throw error;
    return data;
}

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw error;
    return data;
}

export async function getUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data;
}

export function onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
}