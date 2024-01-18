import { SupabaseClient } from '@supabase/supabase-js';
import type { Database, TablesUpdate } from '@/types/supabase';
import { getSession } from '@/lib/session';

export const createProfilesQuery = ({ client }: { client: SupabaseClient<Database> }) => {
  return client
    .from('profiles')
    .select('id, user_name, email')
    .order('created_at', { ascending: true });
};

export const createProfilesUpdateQuery = async ({
  client,
  params,
}: {
  client: SupabaseClient<Database>;
  params: TablesUpdate<'profiles'>;
}) => {
  const session = await getSession({ client });

  return client
    .from('profiles')
    .update(params)
    .eq('id', session?.user.id || '')
    .select('user_name')
    .single();
};
