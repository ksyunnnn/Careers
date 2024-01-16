import Link from 'next/link';
import * as Icons from '@/icons';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="border-t">
      <div className="bg-background">
        <div>
          <div className="h-content-min-height ">
            <div className="flex h-full shrink-0 items-center justify-center rounded-md">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                <Icons.SmileyXEyes size={40} weight="light" />

                <h3 className="mt-4 text-lg font-semibold">404 - Not found</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                  Sorry, the page not found.
                </p>
                <Button variant="link" asChild>
                  <Link href="/">
                    <Icons.ArrowLeft className="mr-2 h-4 w-4" />
                    Go back to home
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

export default NotFound;
