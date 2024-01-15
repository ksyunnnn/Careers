'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from 'next';
import { usePathname } from 'next/navigation';

type Props = {
  className?: string;
};

const items: {
  href: Route;
  title: string;
}[] = [
  {
    title: 'Account',
    href: '/settings/account',
  },
  {
    title: 'Appearance',
    href: '/',
  },
  {
    title: 'Notifications',
    href: '/',
  },
];

export const SidebarInSettings = ({ className }: Props) => {
  const pathname = usePathname();
  return (
    <div className={cn('pb-12 h-content-min-height', className)}>
      <aside className="lg:w-1/5">
        <nav className="flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href as Route}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === item.href
                  ? 'bg-muted hover:bg-muted'
                  : 'hover:bg-transparent hover:underline',
                'justify-start'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};
