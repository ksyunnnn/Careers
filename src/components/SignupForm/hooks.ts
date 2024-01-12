import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { UseFormReturn, useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import { logger } from '@/lib/logger';
import { signUpNewUser } from '@/lib/session';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';

const formId = 'signup-form';

type ReturnType = UseFormReturn<FormValues> & {
  formId: string;
  onSubmit: (e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
};

export const useSignupForm = (): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();

  const supabase = createSupabaseClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data) => {
    const { error } = await signUpNewUser({ client: supabase, data });
    if (error) {
      logger.error('signUpNewUser', { error });
      return;
    }
    toast({
      description: `Please check your email for a confirmation link. Once you have confirmed your email, you can sign in.`,
    });

    router.refresh();
  });

  return {
    formId,
    onSubmit,
    ...form,
  };
};
