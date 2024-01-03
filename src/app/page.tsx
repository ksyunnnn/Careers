import { Metadata } from 'next';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { EmptyPlaceholder } from '@/components/EmptyPlaceholder';

export const metadata: Metadata = {
  title: 'Career Shelf',
  description: 'Career Shelf',
};

const Page = () => {
  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="music" className="h-full space-y-6">
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="music" className="relative">
                Careers
              </TabsTrigger>
              <TabsTrigger value="podcasts">Folder</TabsTrigger>
            </TabsList>
            <div className="ml-auto mr-4">
              <Button>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                Add Career
              </Button>
            </div>
          </div>
          <TabsContent value="music" className="border-none p-0 outline-none">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Edit Careers</h2>
                <p className="text-sm text-muted-foreground">Edit careers.</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4"></div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent
            value="podcasts"
            className="h-full flex-col border-none p-0 data-[state=active]:flex"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">Edit Folder</h2>
                <p className="text-sm text-muted-foreground">
                  Your favorite podcasts. Updated daily.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <EmptyPlaceholder />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
