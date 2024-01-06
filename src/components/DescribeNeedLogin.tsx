import { DialogForLogin } from './DialogForLogin';
import { Button } from './ui/button';
import * as Icons from '@/Icons';

export const DescribeNeedLogin = () => {
  return (
    <div className="h-content-min-height ">
      <div className="flex h-[90%] shrink-0 items-center justify-center rounded-md">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <Icons.Robot size={40} weight="light" />

          <h3 className="mt-4 text-lg font-semibold">No logged in</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">Please log in to continue.</p>
          <DialogForLogin>
            <Button size="sm" className="relative">
              Login
            </Button>
          </DialogForLogin>
        </div>
      </div>
    </div>
  );
};
