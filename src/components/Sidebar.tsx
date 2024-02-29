'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Route } from 'next';

type Props = {
  className?: string;
};

const MenuLinkButton = ({
  pathname,
  href,
  children,
}: {
  pathname: string;
  href: Route;
  children: React.ReactNode;
}) => {
  return (
    <Button
      variant={pathname === href ? 'secondary' : 'ghost'}
      className="w-full justify-start"
      asChild
    >
      <Link href={href} className={pathname === href ? 'cursor-default' : ''}>
        {children}
      </Link>
    </Button>
  );
};

export const Sidebar = ({ className }: Props) => {
  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <ScrollArea className={cn('pb-12 h-content-min-height', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <MenuLinkButton pathname={pathname} href="/dashboard">
              Dashboard
            </MenuLinkButton>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">View</h2>
          <div className="space-y-1">
            <MenuLinkButton pathname={pathname} href="/timeline">
              Timeline
            </MenuLinkButton>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
