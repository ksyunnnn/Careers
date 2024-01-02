import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Shelf',
  description: 'Career Shelf',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Career Shelf</header>
        {children}
        <footer>this is footer</footer>
      </body>
    </html>
  );
};

export default Layout;
