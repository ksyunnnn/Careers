import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { EmptySessionPage } from '@/components/EmptySessionPage';
import { MenubarLogo } from '@/components/MenubarLogo';
import { Menubar } from '@/components/ui/menubar';
import { MenubarAfterLogin } from '@/components/MenubarAfterLogin';
import { SidebarInSettings } from '@/components/SidebarInSettings';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createSupabaseServerClient();

  const session = await getSession({
    client: supabase,
  });

  if (!session) return <EmptySessionPage />;

  return (
    <>
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4 min-h-header-height flex justify-between">
        <MenubarLogo />

        <MenubarAfterLogin sessionUserId={session.user.id} needRedirect={false} />
      </Menubar>
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <SidebarInSettings className="hidden lg:block" />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
