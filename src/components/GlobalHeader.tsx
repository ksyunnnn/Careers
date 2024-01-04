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
import { Button } from './ui/button';
import { DialogForLogin } from './DialogForLogin';
import { MenubarAfterLogin } from './MenubarAfterLogin';

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

      {session && <MenubarAfterLogin sessionUserId={session.user.id} />}
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
