import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { GlobalHeaderAfterLogin } from '@/components/GlobalHeaderAfterLogin';
import { Sidebar } from '@/components/Sidebar';
import { DialogForLogin } from '@/components/DialogForLogin';
import { Button } from '@/components/ui/button';
import { DescribeNeedLogin } from '@/components/DescribeNeedLogin';

const Layout = async ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const supabase = createSupabaseServerClient();

  const session = await getSession({
    client: supabase,
  });

  return (
    <>
      {session && <GlobalHeaderAfterLogin session={session} />}
      {!session && (
        <div className="px-2 lg:px-4 min-h-header-height flex justify-between items-center bg-neutral-50">
          <div className="font-bold">Career Shelf</div>
          <DialogForLogin>
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </DialogForLogin>
        </div>
      )}
      <div className="border-t">
        <div className="bg-background">
          {session && (
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              {children}
            </div>
          )}
          {!session && (
            <div>
              <DescribeNeedLogin />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
