import { EditOrNewCareerForm } from '@/components/EditOrNewCareerForm';

export const runtime = 'edge';

type Context = {
  params: {
    careerId: string;
  };
};

const Page = ({ params }: Context) => {
  return (
    <div className="h-[100vh]">
      <EditOrNewCareerForm careerId={params.careerId} />
    </div>
  );
};

export default Page;
