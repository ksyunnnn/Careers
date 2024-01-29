import { SupabaseClient } from '@supabase/supabase-js';
import type { Database, TablesInsert, TablesUpdate } from '@/types/supabase';
import { getSession } from '@/lib/session';

const createInsertCareersQuery = async ({
  client,
  params,
}: {
  client: SupabaseClient<Database>;
  params: Pick<TablesInsert<'careers'>, 'contents'>;
}) => {
  const session = await getSession({ client });
  if (!session) throw new Error('session is null');

  return client.from('careers').insert({
    ...params,
    created_by_user_id: session.user.id,
  });
};

const createUpdateCareersQuery = async ({
  client,
  params,
  careerId,
}: {
  client: SupabaseClient<Database>;
  params: Pick<TablesUpdate<'careers'>, 'contents'>;
  careerId: string;
}) => {
  return client
    .from('careers')
    .update({
      ...params,
    })
    .eq('id', careerId);
};

const createSelectCareersQuery = async ({
  client,
  query,
}: {
  client: SupabaseClient<Database>;
  query?: unknown /** @todo */;
}) => {
  const session = await getSession({ client });
  if (!session) throw new Error('session is null');

  return () => client.from('careers').select('*').eq('created_by_user_id', session.user.id);
};

export { createInsertCareersQuery, createUpdateCareersQuery, createSelectCareersQuery };
