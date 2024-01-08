import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

/** @todo - tenpolary */
export const createInsertCareersQuery = ({ client }: { client: SupabaseClient<Database> }) => {
  return client.from('').select('');
};
