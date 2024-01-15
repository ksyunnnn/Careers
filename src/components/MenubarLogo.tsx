import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

export const MenubarLogo = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="font-bold">Career Shelf</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>About Career Shelf</MenubarItem>
        <MenubarSeparator />
        <MenubarItem asChild>
          <Link href={'/dashboard'}>Dashboard</Link>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Hide Sidebar... <MenubarShortcut>⌘H</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};
