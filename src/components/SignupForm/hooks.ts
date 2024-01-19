import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import { logger } from '@/lib/logger';
import { signUpNewUser } from '@/lib/session';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import { FormReturn } from '@/types/form';
import { useIsSubmitting } from '../useIsSubmitting';

const formId = 'signup-form';

export const useSignupForm = (): FormReturn<FormValues> => {
  const router = useRouter();
  const { toast } = useToast();
  const { isSubmitting, setIsSubmitting } = useIsSubmitting();

  const supabase = createSupabaseClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = form;

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      const { error } = await signUpNewUser({ client: supabase, data });
      if (error) {
        logger.error('signUpNewUser', { error });
        return;
      }
      toast({
        description: `Please check your email for a confirmation link. Once you have confirmed your email, you can sign in.`,
      });

      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  });

  return {
    formId,
    onSubmit,
    ...form,
    disabled: !isDirty || isSubmitting,
  };
};
