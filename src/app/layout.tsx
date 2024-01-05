import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { createServerComponentSupabase } from '@/lib/supabaseServer';
import { getSession } from '@/lib/supabase';
import { GlobalHeader } from '@/components/GlobalHeader';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Shelf',
  description: 'Career Shelf',
};

const Layout = async ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const supabase = createServerComponentSupabase();

  const session = await getSession({
    client: supabase,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:hidden">Mobile is not supported now 🙏</div>
        <div className="hidden md:block">
          <GlobalHeader session={session} />
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <Sidebar className="hidden lg:block" />
                {children}
                {modal}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
