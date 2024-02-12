'use client'; // Error components must be Client Components
import Link from 'next/link';
import * as Icons from '@/icons';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="border-t">
      <div className="bg-background">
        <div>
          <div className="h-content-min-height ">
            <div className="flex h-full shrink-0 items-center justify-center rounded-md">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <Icons.SmileyXEyes size={40} weight="light" />

                <h3 className="mt-4 text-lg font-semibold">Something went wrong!</h3>
                <div>
                  <p className=" mt-2 text-sm text-muted-foreground">
                    Apologies, we encountered an error while attempting to connect with our server.
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    It may be a good time to enjoy a cup of coffee, and please try again later.
                  </p>
                </div>
                <Button variant="link" asChild>
                  <Link href="/">
                    <Icons.ArrowLeft className="mr-2 h-4 w-4" />
                    Cafe break, then home
                    <Icons.Coffee className="ml-1 mb-[1px] h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
