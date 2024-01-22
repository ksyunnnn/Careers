import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { DialogForLogin } from '@/components/DialogForLogin';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const runtime = 'edge';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createSupabaseServerClient();

  const session = await getSession({
    client: supabase,
  });

  return (
    <>
      <div className="px-2 lg:px-4 min-h-header-height flex justify-between items-center">
        <div className="font-bold">
          <Link href="/">Career Shelf</Link>
        </div>
        {!session && (
          <DialogForLogin>
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </DialogForLogin>
        )}
        {session && (
          <Button asChild variant="ghost">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        )}
      </div>
      {children}
    </>
  );
};

export default Layout;
