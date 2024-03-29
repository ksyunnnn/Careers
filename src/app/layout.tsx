import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:hidden">Mobile is not supported now 🙏</div>
        <div className="hidden md:block">
          {children}
          {modal}
        </div>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default Layout;
