import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { UseFormReturn, useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import { logger } from '@/lib/logger';
import { signInWithPassword } from '@/lib/session';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';

const formId = 'dialog-login-form';

type ReturnType = UseFormReturn<FormValues> & {
  formId: string;
  onSubmit: (e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
};

export const useDialogForLogin = (): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();

  const supabase = createSupabaseClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data) => {
    const { error } = await signInWithPassword({ client: supabase, data });
    if (error) {
      logger.error('handleSignIn', { error });
      return;
    }
    toast({
      title: 'Welcome back🎉',
      description: 'You have successfully logged in.',
    });

    router.refresh();
  });

  return {
    formId,
    ...form,
    onSubmit,
  };
};
