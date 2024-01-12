import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Empty } from '../Empty';
import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { createProfilesQuery } from '@/query/createProfilesQuery';
import { logger } from '@/lib/logger';
import { ButtonForLogout } from '../ButtonForLogout';
import Link from 'next/link';

type Props = {
  sessionUserId: string;
};

export const MenubarAfterLogin = async ({ sessionUserId }: Props) => {
  const supabase = createSupabaseServerClient();
  const query = createProfilesQuery({ client: supabase });
  const { data: profile, error } = await query.eq('id', sessionUserId).single();
  if (error) logger.error(error);

  if (profile === null) {
    return <Empty />;
  }

  const { email, user_name } = profile;

  return (
    <MenubarMenu>
      <MenubarTrigger className="hidden md:block">
        <div className="flex flex-col space-y-1 text-left w-36">
          <p className="text-sm font-medium leading-none truncate w-full">
            {user_name || <span className="text-muted-foreground">Empty your name😢</span>}
          </p>
          <p className="text-xs leading-none text-muted-foreground truncate w-full" title={email}>
            {email}
          </p>
        </div>
      </MenubarTrigger>
      <MenubarContent forceMount>
        <MenubarItem inset asChild>
          <Link href="/settings/account">Account Settings</Link>
        </MenubarItem>
        <MenubarSeparator />

        <MenubarItem asChild className="w-full">
          <ButtonForLogout />
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};
