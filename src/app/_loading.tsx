import { Skeleton } from '@/components/ui/skeleton';

/**
 * WIP -- it might be better to use doc as a reference because of pallarel routes.
 */
const Loading = () => {
  return (
    <>
      <div className="px-2 lg:px-4 min-h-header-height flex justify-between items-center">
        <div className="font-bold">Career Shelf</div>
        <div className="space-y-1 w-36">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <div className="col-span-1 space-y-4 py-10 px-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 max-w-28" />
              <Skeleton className="h-4 max-w-28" />
              <Skeleton className="h-4 max-w-28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
