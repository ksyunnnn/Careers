import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues, ReturnType } from './types';

import matter from 'gray-matter';

import { logger } from '@/lib/logger';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import { createInsertCareersQuery } from '@/query/createCareersQuery';
import { useEffect, useState } from 'react';
import { FormReturn } from '@/types/form';
import { useIsSubmitting } from '../useIsSubmitting';

const formId = 'edit-career-form';

const defaultContent = `---
title: 
start_date: 2022-01-01
end_date: 2022-12-31
---`;

export const useEditCareerForm = (careerId?: string): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();
  const { isSubmitting, setIsSubmitting } = useIsSubmitting();

  const [body, setBody] = useState<ReturnType['body']>('');
  const [frontMatter, setFrontMatter] = useState<ReturnType['frontMatter']>({});
  const [errorByMatter, setErrorByMatter] = useState<ReturnType['errorByMatter']>(null);

  const supabase = createSupabaseClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
    defaultValues: {
      contents: defaultContent,
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { isDirty },
  } = form;

  const onSubmit = handleSubmit(async (data) => {
    /**
     * if careerId is not undefined, update the career
     * else, insert the career
     */

    try {
      setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  });

  const contents = watch('contents');

  useEffect(() => {
    try {
      const { content: body, data: frontMatter } = matter(contents || '');
      setErrorByMatter(null);
      setBody(body);
      setFrontMatter(frontMatter);
    } catch (error: any) {
      logger.error('matter', { error });
      setErrorByMatter(error.reason);
    }
  }, [contents]);

  return {
    formId,
    ...form,
    onSubmit,
    body,
    frontMatter,
    errorByMatter,
    disabled: !isDirty || isSubmitting,
  };
};
