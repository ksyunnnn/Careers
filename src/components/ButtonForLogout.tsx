'use client';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { ButtonProps } from './ui/button';
import { signOut } from '@/lib/session';
import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';

export const ButtonForLogout = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const supabase = createSupabaseClient();
  const { refresh } = useRouter();
  return (
    <button
      {...props}
      ref={ref}
      onClick={async (e) => {
        await signOut({ client: supabase });
        props.onClick && props.onClick(e);
        refresh();
      }}
    >
      Logout
    </button>
  );
});

ButtonForLogout.displayName = 'ButtonForLogout';
