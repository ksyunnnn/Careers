import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as Icons from '@/icons';

type PageContext = {
  searchParams: {
    code?: string;
  };
};

export const runtime = 'edge';

const Page = ({ searchParams }: PageContext) => {
  const { code } = searchParams;
  if (!code) notFound();
  return (
    <div className="bg-background grid place-content-center min-h-content-min-height">
      <div className="min-w-80 space-y-6 -mt-16">
        <h2 className="text-4xl">Welcome🎉</h2>
        <p>You have successfully confirm email.</p>
        <div>
          <Button asChild variant="ghost">
            <Link href="/dashboard">
              <Icons.SignIn className="mr-2 h-4 w-4" />
              Go into Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
