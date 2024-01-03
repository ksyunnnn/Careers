import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Session } from '@supabase/supabase-js';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { DialogForLogin } from './DialogForLogin';

type Props = {
  session: Session | null;
};

export const GlobalHeader = ({ session }: Props) => {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4 min-h-header-height flex justify-between">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Career Shelf</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Career Shelf</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Hide Sidebar... <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {session && (
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">Account: {session.user.email}</MenubarTrigger>
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
      )}
      {!session && (
        <DialogForLogin>
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </DialogForLogin>
      )}
    </Menubar>
  );
};
