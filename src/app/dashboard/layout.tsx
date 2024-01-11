import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { GlobalHeaderAfterLogin } from '@/components/GlobalHeaderAfterLogin';
import { Sidebar } from '@/components/Sidebar';
import { EmptySessionPage } from '@/components/EmptySessionPage';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createSupabaseServerClient();

  const session = await getSession({
    client: supabase,
  });

  if (!session) return <EmptySessionPage />;

  return (
    <>
      <GlobalHeaderAfterLogin session={session} />
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
