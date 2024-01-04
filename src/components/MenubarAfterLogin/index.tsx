import {
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Empty } from '../Empty';
import { createServerComponentSupabase } from '@/lib/supabaseServer';
import { createProfilesQuery } from '@/query/createProfilesQuery';
import { logger } from '@/lib/logger';

type Props = {
  sessionUserId: string;
};

export const MenubarAfterLogin = async ({ sessionUserId }: Props) => {
  const supabase = createServerComponentSupabase();
  const query = createProfilesQuery({ client: supabase });
  const { data: profile, error } = await query.eq('id', sessionUserId).single();
  if (error) logger.error(error);

  if (profile === null) {
    return <Empty />;
  }

  const { email, last_name } = profile;

  return (
    <MenubarMenu>
      <MenubarTrigger className="hidden md:block">
        <div className="flex flex-col space-y-1 text-left w-36">
          <p className="text-sm font-medium leading-none truncate w-full">
            {last_name || <span className="text-muted-foreground">Empty your name😢</span>}
          </p>
          <p className="text-xs leading-none text-muted-foreground truncate w-full" title={email}>
            {email}
          </p>
        </div>
      </MenubarTrigger>
      <MenubarContent forceMount>
        <MenubarLabel inset>Switch Account</MenubarLabel>
        <MenubarSeparator />
        <MenubarRadioGroup value="benoit">
          <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
          <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
          <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator />
        <MenubarItem inset>Manage Family...</MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Add Account...</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};
