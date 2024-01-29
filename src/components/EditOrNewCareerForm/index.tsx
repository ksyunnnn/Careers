'use client';
import { Textviewer } from '@/components/Textviewer';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useNewCareerForm, useEditCareerForm } from './hooks';
import { Parallel } from '@/types/globals';
import { EditOrNewCareerFormProvider } from './provider';
import { Header } from './components/Header';
import { SideNav } from './components/SIdeNav';
import { useFrontMatterStore } from './store';
import { TABS } from './const';

const Form = ({
  parallel = 'default',
  isEdit = false,
  methods,
}: {
  parallel?: Parallel;
  isEdit?: boolean;
  methods: ReturnType<typeof useNewCareerForm> | ReturnType<typeof useEditCareerForm>;
}) => {
  const { disabled, formId, onSubmit, register } = methods;
  const { errorByMatter, body } = useFrontMatterStore();

  return (
    <EditOrNewCareerFormProvider {...methods}>
      <Header parallel={parallel} disabled={disabled} formId={formId} />
      <Separator />

      {errorByMatter && <div>{errorByMatter}</div>}

      <Tabs defaultValue={TABS.edit} className="flex-1">
        <form onSubmit={onSubmit} id={formId}>
          <div className="container py-6 grid gap-6 md:grid-cols-[1fr_200px]">
            <SideNav isEdit={isEdit} />

            <TabsContent value={TABS.edit} className="mt-0">
              <Textarea
                placeholder="Write your career here."
                className="p-4 h-full"
                {...register('contents')}
              />
            </TabsContent>
            <TabsContent value={TABS.preview} className="mt-0">
              <Textviewer className="rounded-md h-full border bg-muted p-4">{body}</Textviewer>
            </TabsContent>
          </div>
        </form>
      </Tabs>
    </EditOrNewCareerFormProvider>
  );
};

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

type Props = {
  parallel?: Parallel;
  careerId?: string;
};

export const EditOrNewCareerForm = ({ parallel = 'default', careerId }: Props) => {
  if (careerId) return <EditCareerForm parallel={parallel} careerId={careerId} />;
  return <NewCareerForm parallel={parallel} />;
};
