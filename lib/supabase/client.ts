// Stubbed Supabase client. 
// Requires @supabase/supabase-js to be installed.
// Run: npm install @supabase/supabase-js

/*
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
*/

// Mock client for UI development without keys
export const supabase = {
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
  }),
  auth: {
    signInWithPassword: () => Promise.resolve({ data: { user: { id: 'mock-id', email: 'admin@goodwingrowai.com' } }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null })
  }
};
