import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { UseFormReturn, useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import { logger } from '@/lib/logger';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import { createInsertCareersQuery } from '@/query/createCareersQuery';

const formId = 'edit-career-form';

type ReturnType = UseFormReturn<FormValues> & {
  formId: string;
  onSubmit: (e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
};

export const useEditCareerForm = (careerId?: string): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();

  const supabase = createSupabaseClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data) => {
    /**
     * if careerId is not undefined, update the career
     * else, insert the career
     */

    const { error } = await createInsertCareersQuery({ client: supabase });
    if (error) {
      logger.error('insert', { error });
      return;
    }
    toast({
      title: 'Awesome🎉',
      description: 'You have successfully inserted a new career.',
    });

    router.refresh();
  });

  return {
    formId,
    ...form,
    onSubmit,
  };
};
