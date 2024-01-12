import { DialogForLogin } from '@/components/DialogForLogin';
import { Button } from '@/components/ui/button';
import { DescribeNeedLogin } from '@/components/DescribeNeedLogin';

export const EmptySessionPage = () => {
  /** WIP @todo -- replace */
  return (
    <>
      <div className="px-2 lg:px-4 min-h-header-height flex justify-between items-center bg-neutral-50">
        <div className="font-bold">Career Shelf</div>
        <DialogForLogin>
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </DialogForLogin>
      </div>
      <div className="border-t">
        <div className="bg-background">
          <div>
            <DescribeNeedLogin />
          </div>
        </div>
      </div>
    </>
  );
};
