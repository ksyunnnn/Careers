import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { EmptySessionPage } from '@/components/EmptySessionPage';
import { Menubar } from '@/components/ui/menubar';
import { MenubarAfterLogin } from '@/components/MenubarAfterLogin';
import { SidebarInSettings } from '@/components/SidebarInSettings';
import { Button } from '@/components/ui/button';
import * as Icons from '@/icons';
import Link from 'next/link';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createSupabaseServerClient();

  const session = await getSession({
    client: supabase,
  });

  if (!session) return <EmptySessionPage />;

  return (
    <>
      <Menubar className="rounded-none border-none px-2 lg:px-4 min-h-header-height flex justify-between">
        <Button variant="ghost" asChild>
          <Link href="/dashboard">
            <Icons.ArrowLeft className="mr-2 h-4 w-4" /> back to dashboard
          </Link>
        </Button>

        <MenubarAfterLogin sessionUserId={session.user.id} needRedirect={false} />
      </Menubar>
      <div className="border-t">
        <div>
          <div className="grid lg:grid-cols-5">
            <SidebarInSettings className="hidden lg:block col-span-1 col-start-2" />
            <main className="col-span-1 col-start-3">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
