import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { EmptySessionPage } from '@/components/EmptySessionPage';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createSupabaseServerClient();

  const session = await getSession({
    client: supabase,
  });

  if (!session) return <EmptySessionPage />;

  return <>{children}</>;
};

export default Layout;
