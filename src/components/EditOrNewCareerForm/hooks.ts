import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues, ReturnType } from './types';

import matter from 'gray-matter';

import { logger } from '@/lib/logger';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import {
  createInsertCareersQuery,
  createSelectCareersQuery,
  createUpdateCareersQuery,
} from '@/query/createCareersQuery';
import { useEffect } from 'react';
import { useIsSubmitting } from '../useIsSubmitting';
import { useFrontMatterStore } from './store';

const formId = 'edit-career-form';

const useFrontMatter = (contents: string) => {
  const { updateBody, updateErrorByMatter, updateFrontMatter } = useFrontMatterStore();

  useEffect(() => {
    try {
      const { content: body, data: frontMatter } = matter(contents || '');
      updateErrorByMatter(null);
      updateBody(body);
      updateFrontMatter(frontMatter);
    } catch (error: any) {
      logger.error('matter', { error });
      updateErrorByMatter(error.reason);
    }
  }, [contents, updateBody, updateErrorByMatter, updateFrontMatter]);
};

const defaultContent = `---
title: 
start_date: 2022-01-01
end_date: 2022-12-31
---`;

const useNewCareerForm = (): ReturnType => {
  const router = useRouter();

  const { toast } = useToast();
  const { isSubmitting, setIsSubmitting } = useIsSubmitting();

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

  const contents = watch('contents');

  useFrontMatter(contents);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      const { error } = await createInsertCareersQuery({
        client: supabase,
        params: {
          contents: data.contents,
        },
      });
      if (error) {
        logger.error('insert', { error });
        return;
      }

      toast({
        title: 'Awesome🎉',
        description: 'You have successfully inserted a new career.',
      });

      router.refresh();
      router.push('/dashboard');
    } finally {
      setIsSubmitting(false);
    }
  });

  return {
    formId,
    ...form,
    onSubmit,
    disabled: !isDirty || isSubmitting,
  };
};

const useEditCareerForm = (careerId: string): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();
  const { isSubmitting, setIsSubmitting } = useIsSubmitting();

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
    reset,
  } = form;

  useEffect(() => {
    const fetchCareer = async () => {
      const query = await createSelectCareersQuery({ client: supabase });
      const { data, error } = await query().eq('id', careerId).maybeSingle();

      if (error) {
        logger.error('fetch', { error });
        return;
      }
      if (!data) {
        logger.error('fetch', { error: 'data is null' });
        return;
      }
      reset({
        contents: data.contents,
      });
    };
    fetchCareer();
  }, [careerId, reset, supabase]);

  const contents = watch('contents');

  useFrontMatter(contents);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      const { error } = await createUpdateCareersQuery({
        client: supabase,
        params: {
          contents: data.contents,
        },
        careerId,
      });
      if (error) {
        logger.error('update', { error });
        return;
      }
      toast({
        title: 'Awesome🎉',
        description: 'You have successfully updated your career.',
      });

      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  });

  return {
    formId,
    ...form,
    onSubmit,
    disabled: !isDirty || isSubmitting,
  };
};

export { useNewCareerForm, useEditCareerForm };
