import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

export const signInWithPassword = async ({
  client,
  data,
}: {
  data: { email: string; password: string };
  client: SupabaseClient<Database>;
}) => {
  return await client.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
};

export const signOut = async ({ client }: { client: SupabaseClient<Database> }) => {
  return await client.auth.signOut();
};

export const getSession = async ({ client }: { client: SupabaseClient<Database> }) => {
  const {
    data: { session },
  } = await client.auth.getSession();
  return session;
};
