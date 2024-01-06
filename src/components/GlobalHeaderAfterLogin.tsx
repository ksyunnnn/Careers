import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Session } from '@supabase/supabase-js';
import { MenubarAfterLogin } from './MenubarAfterLogin';
import Link from 'next/link';

type Props = {
  session: Session;
};

export const GlobalHeaderAfterLogin = ({ session }: Props) => {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4 min-h-header-height flex justify-between">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Career Shelf</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Career Shelf</MenubarItem>
          <MenubarSeparator />
          <MenubarItem asChild>
            <Link href={'/'}>Top</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Hide Sidebar... <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarAfterLogin sessionUserId={session.user.id} />
    </Menubar>
  );
};
