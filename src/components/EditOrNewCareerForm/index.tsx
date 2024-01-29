'use client';
<<<<<<< Updated upstream
import { PresetActions } from '@/components/PresetActions';
import { PresetSelector } from '@/components/EditOrNewCareerForm/components/PresetSelector';
import { PresetShare } from '@/components/PresetShare';
import { Textviewer } from '@/components/Textviewer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useNewCareerForm, useEditCareerForm } from './hooks';
import { Parallel } from '@/types/globals';
import { EditOrNewCareerFormProvider } from './provider';
import { Header } from './components/Header';
import { SideNav } from './components/SIdeNav';
=======
import { useNewCareerForm, useEditCareerForm } from './hooks';
import { Parallel } from '@/types/globals';
import { Form } from './components/Form';

const NewCareerForm = ({ parallel = 'default' }: { parallel?: Parallel }) => {
  const methods = useNewCareerForm();

  return <Form methods={methods} parallel={parallel} />;
};

const EditCareerForm = ({
  parallel = 'default',
  careerId,
}: {
  parallel?: Parallel;
  careerId: string;
}) => {
  const methods = useEditCareerForm(careerId);

  return <Form methods={methods} parallel={parallel} isEdit />;
};
>>>>>>> Stashed changes

type Props = {
  parallel?: Parallel;
  careerId?: string;
};

const TABS = { edit: 'edit', preview: 'preview' } as const;

export const EditOrNewCareerForm = ({ careerId, parallel = 'default' }: Props) => {
  const methods = useNewCareerForm();
  const { register, frontMatter, body, errorByMatter, disabled, onSubmit, formId } = methods;

  return (
    <EditOrNewCareerFormProvider {...methods}>
      <div className="hidden flex-col md:flex h-full">
        <Header parallel={parallel} disabled={disabled} formId={formId} />
        <Separator />

        {errorByMatter && <div>{errorByMatter}</div>}

        <Tabs defaultValue={TABS.edit} className="flex-1">
          <div className="container h-full py-6">
            <form onSubmit={onSubmit} id={formId}>
              <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                <SideNav
                  isEdit={!!careerId}
                  frontMatter={frontMatter}
                  tabsList={
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value={TABS.edit} className="capitalize">
                        {TABS.edit}
                      </TabsTrigger>
                      <TabsTrigger value={TABS.preview} className="capitalize">
                        {TABS.preview}
                      </TabsTrigger>
                    </TabsList>
                  }
                />

                <div className="md:order-1">
                  <TabsContent value={TABS.edit} className="mt-0 border-0 p-0 h-full">
                    <div className="flex h-full flex-col space-y-4">
                      <Textarea
                        placeholder="Write a tagline for an ice cream shop"
                        className="min-h-[400px] flex-1 p-4 h-full"
                        {...register('contents')}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value={TABS.preview} className="mt-0 border-0 p-0 h-full">
                    <div className="flex h-full flex-col space-y-4">
                      <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                        <Textarea
                          placeholder="We're writing to [inset]. Congrats from OpenAI!"
                          className="min-h-[300px] h-full"
                          {...register('contents')}
                        />
                        <Textviewer className="rounded-md border bg-muted p-4">{body}</Textviewer>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </form>
          </div>
        </Tabs>
      </div>
    </EditOrNewCareerFormProvider>
  );
};
