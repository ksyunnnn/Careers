/** @fixme - temporary */
'use client';
import { useEditCareerForm } from '@/components/EditCareerForm/hooks';
import { PresetActions } from '@/components/PresetActions';
import { PresetSelector } from '@/components/PresetSelector';
import { PresetShare } from '@/components/PresetShare';
import { Textviewer } from '@/components/Textviewer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import matter from 'gray-matter';

/** @fixme - temporary */
export const CareerPage = () => {
  const { register, watch } = useEditCareerForm();
  const body = watch('body');
  const { content, data } = matter(body || '');

  return (
    <div className="hidden h-[100vh] flex-col md:flex">
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <Button asChild variant="secondary" className="mr-2">
          <Link href="/">back</Link>
        </Button>
        <h2 className="text-lg font-semibold">Edit</h2>
        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
          <PresetSelector />
          <Button variant="secondary">Save</Button>
          <div className="hidden space-x-2 md:flex">
            <PresetShare />
          </div>
          <PresetActions />
        </div>
      </div>
      <Separator />
      <Tabs defaultValue="complete" className="flex-1">
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
              <div className="grid gap-2">
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Mode
                </span>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="complete">
                    <span className="sr-only">Complete</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-5 w-5"
                    >
                      <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="4" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="4" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="4" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="8.5" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="8.5" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="13" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                    </svg>
                  </TabsTrigger>
                  <TabsTrigger value="insert">
                    <span className="sr-only">Insert</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
                        fill="currentColor"
                      ></path>
                      <rect x="4" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="8.5" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="13" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
                    </svg>
                  </TabsTrigger>
                  <TabsTrigger value="edit">
                    <span className="sr-only">Edit</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-5 w-5"
                    >
                      <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="4" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="4" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="4" y="15" width="4" height="2" rx="1" fill="currentColor"></rect>
                      <rect x="8.5" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
                      <path
                        d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Meta
                </span>
                <div className="bg-muted rounded-md p-2 grid gap-4">
                  {Object.keys(data).map((key) => (
                    <div key={key}>
                      <div className="capitalize text-xs font-bold">{key}</div>
                      <div className="text-sm">{data[key]}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <ModelSelector types={types} models={models} />
              <TemperatureSelector defaultValue={[0.56]} />
              <MaxLengthSelector defaultValue={[256]} />
              <TopPSelector defaultValue={[0.9]} /> */}
            </div>
            <div className="md:order-1">
              <TabsContent value="complete" className="mt-0 border-0 p-0">
                <div className="flex h-full flex-col space-y-4">
                  <Textarea
                    placeholder="Write a tagline for an ice cream shop"
                    className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
                    {...register('body')}
                  />
                </div>
              </TabsContent>
              <TabsContent value="insert" className="mt-0 border-0 p-0">
                <div className="flex flex-col space-y-4">
                  <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                    <Textarea
                      placeholder="We're writing to [inset]. Congrats from OpenAI!"
                      className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
                      {...register('body')}
                    />
                    <Textviewer className="rounded-md border bg-muted">{content}</Textviewer>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="edit" className="mt-0 border-0 p-0">
                <div className="flex flex-col space-y-4">
                  <div className="grid h-full gap-6 lg:grid-cols-2">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-1 flex-col space-y-2">
                        <Label htmlFor="input">Input</Label>
                        <Textarea
                          id="input"
                          placeholder="We is going to the market."
                          className="flex-1 lg:min-h-[580px]"
                          {...register('body')}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Label htmlFor="instructions">Instructions</Label>
                        <Textarea id="instructions" placeholder="Fix the grammar." />
                      </div>
                    </div>
                    <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CareerPage;
