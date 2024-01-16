'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import { Typography } from './Typography';

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
];

export const SidebarInSettings = ({ className }: Props) => {
  const pathname = usePathname();
  return (
    <aside className={cn('pb-12 h-content-min-height pt-6 px-4', className)}>
      <Typography variant="h2" className="px-4">
        Settings
      </Typography>
      <nav className="flex flex-col">
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
  );
};
