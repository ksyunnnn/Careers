import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import matter from 'gray-matter';

import { logger } from '@/lib/logger';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import { createInsertCareersQuery } from '@/query/createCareersQuery';
import { useEffect, useState } from 'react';
import { FormReturn } from '@/types/form';
import { useIsSubmitting } from '../useIsSubmitting';

const formId = 'edit-career-form';

type ReturnType = FormReturn<FormValues> & {
  body: string;
  frontMatter: Record<string, unknown>;
  errorByMatter: string | null;
};

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
      contents: `---
title: Front-End Web Developer
skils: Nextjs, React, TypeScript, TailwindCSS
start_date: 2022-01-01
end_date: 2022-12-31
---
As a seasoned Front-End Web Developer, I bring a wealth of experience and expertise in crafting dynamic and visually appealing user interfaces. My professional journey began on January 1, 2022, and throughout the year, I demonstrated proficiency in key technologies and frameworks, including Next.js, React, TypeScript, and TailwindCSS.

During my tenure as a Front-End Web Developer from January 1, 2022, to December 31, 2022, I actively contributed to projects that demanded a keen eye for design, strong problem-solving skills, and a commitment to delivering high-quality user experiences. My ability to collaborate with cross-functional teams and adapt to evolving technologies positions me as a valuable asset for any forward-thinking organization seeking a skilled Front-End Web Developer.
`,
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
