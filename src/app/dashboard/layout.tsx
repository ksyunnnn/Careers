import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { Sidebar } from '@/components/Sidebar';
import { EmptySessionPage } from '@/components/EmptySessionPage';
import { Menubar } from '@/components/ui/menubar';
import { MenubarLogo } from '@/components/MenubarLogo';
import { MenubarAfterLogin } from '@/components/MenubarAfterLogin';

export const runtime = 'edge';

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

        <MenubarAfterLogin sessionUserId={session.user.id} />
      </Menubar>
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
