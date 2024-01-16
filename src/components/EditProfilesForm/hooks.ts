import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { UseFormReturn, useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import { logger } from '@/lib/logger';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import { createProfilesQuery, createProfilesUpdateQuery } from '@/query/createProfilesQuery';
import { useEffect } from 'react';
import { getSession } from '@/lib/session';
const formId = 'dialog-login-form';

type ReturnType = UseFormReturn<FormValues> & {
  formId: string;
  onSubmit: (e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
};

export const useEditProfilesForm = (): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();

  const supabase = createSupabaseClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
  });

  const { handleSubmit, reset } = form;

  useEffect(() => {
    (async () => {
      /** get session. and fetch profile data by the session user id. */
      const session = await getSession({ client: supabase });
      const { data, error } = await createProfilesQuery({ client: supabase })
        .eq('id', session?.user.id || '')
        .single();
      if (error) logger.error('createProfilesQuery', { error });
      /** fill out form by the fetched data. */
      reset({
        user_name: data?.user_name || '',
      });
    })();
  }, [reset, supabase]);

  const onSubmit = handleSubmit(async (data) => {
    const { error } = await createProfilesUpdateQuery({ client: supabase, params: data });
    if (error) {
      logger.error('createProfilesInsertQuery', { error });
      return;
    }
    toast({
      title: 'Profile Saved',
      description: 'Your profile information has been saved.',
    });

    router.refresh();
  });

  return {
    formId,
    ...form,
    onSubmit,
  };
};
