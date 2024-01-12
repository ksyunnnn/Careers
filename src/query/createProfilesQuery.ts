import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

export const createProfilesQuery = ({ client }: { client: SupabaseClient<Database> }) => {
  return client
    .from('profiles')
    .select('id, user_name, email')
    .order('created_at', { ascending: true });
};
