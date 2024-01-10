import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { UseFormReturn, useForm } from 'react-hook-form';
import { formValuesSchema } from './schema';
import { FormValues } from './types';

import { logger } from '@/lib/logger';
import { signInWithPassword } from '@/lib/session';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useToast } from '../ui/use-toast';
import { Route } from 'next';
import Link from 'next/link';
import { Button } from '../ui/button';

const formId = 'dialog-login-form';

type ReturnType = UseFormReturn<FormValues> & {
  formId: string;
  onSubmit: (e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
};

/** @see - https://github.com/ksyunnnn/Careers/issues/5 */
const errorDescription = (
  <span>
    {`Sometimes, it may not reload due to a bug in the system after login. Please try reloading the page in your browser.
More details: `}
    <Button asChild variant="link">
      <Link target="_blank" href="https://github.com/ksyunnnn/Careers/issues/5">
        #5
      </Link>
    </Button>
  </span>
);

export const useDialogForLogin = (): ReturnType => {
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname() as Route;

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
      description: pathname === '/new' ? errorDescription : `You have successfully logged in.`,
    });

    router.refresh();
  });

  return {
    formId,
    ...form,
    onSubmit,
  };
};
