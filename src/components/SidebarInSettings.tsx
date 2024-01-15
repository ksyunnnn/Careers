import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type Props = {
  className?: string;
};

export const SidebarInSettings = ({ className }: Props) => {
  return (
    <ScrollArea className={cn('pb-12 h-content-min-height', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Account</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              2023.12
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              2023.11
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">View</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Timeline
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
