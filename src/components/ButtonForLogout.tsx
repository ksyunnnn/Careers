'use client';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { ButtonProps } from './ui/button';
import { signOut } from '@/lib/session';
import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';
import { useToast } from './ui/use-toast';
import * as Icons from '@/iconsUp';

export const ButtonForLogout = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const supabase = createSupabaseClient();
  const { refresh } = useRouter();
  const { toast } = useToast();
  return (
    <button
      {...props}
      ref={ref}
      onClick={async (e) => {
        await signOut({ client: supabase });
        props.onClick && props.onClick(e);
        toast({
          title: 'Hope to see you again😢',
          description: 'You are logged out.',
        });
        refresh();
      }}
    >
      <Icons.SignOut className="mr-2 h-4 w-4" />
      Logout
    </button>
  );
});

ButtonForLogout.displayName = 'ButtonForLogout';
