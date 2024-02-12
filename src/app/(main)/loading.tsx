import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const Loading = () => {
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="h-full space-y-6">
          <div className="space-between flex items-center">
            <Skeleton className={cn(buttonVariants({ variant: 'ghost' }), 'w-40')} />
            <div className="ml-auto mr-4">
              <Skeleton className={cn(buttonVariants({ variant: 'ghost' }), 'w-40')} />
            </div>
          </div>
          <div className="border-none p-0 outline-none">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex gap-4 py-8">
              <Skeleton className="h-40 w-40" />
              <Skeleton className="h-40 w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
