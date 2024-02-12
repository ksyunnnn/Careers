import { Textviewer } from '@/components/Textviewer';
import { getMatter } from '@/lib/getMatter';
import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { createSelectCareersQuery } from '@/query/createCareersQuery';
import { Separator } from '@/components/ui/separator';

const Page = async () => {
  const supabase = createSupabaseServerClient();
  const query = await createSelectCareersQuery({ client: supabase });
  const { data, error } = await query();

  if (error) {
    throw error;
  }

  if (!data) {
    return 'Loading...';
  }

  const jsonArray = data.map((career) => {
    const { body, frontMatter } = getMatter(career.contents);
    return {
      ...frontMatter,
      body,
    };
  });

  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Timeline</h2>
            <p className="text-sm text-muted-foreground">Show your careers all.</p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="bg-muted p-4 rounded-md">
          <Textviewer as="pre" className="text-sm">
            {JSON.stringify(jsonArray, null, 2)}
          </Textviewer>
        </div>
      </div>
    </div>
  );
};

export default Page;
