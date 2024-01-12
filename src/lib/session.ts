import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

export const signUpNewUser = async ({
  client,
  data,
}: {
  client: SupabaseClient<Database>;
  data: { email: string; password: string };
}) => {
  return await client.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SERVICE_URL || process.env.VERCEL_URL}/welcome`,
    },
  });
};

export const signInWithPassword = async ({
  client,
  data,
}: {
  client: SupabaseClient<Database>;
  data: { email: string; password: string };
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
