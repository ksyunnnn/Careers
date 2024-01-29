import { EditOrNewCareerForm } from '@/components/EditOrNewCareerForm';
import { Modal } from '@/components/Modal';

export const runtime = 'edge';

type Context = {
  params: {
    careerId: string;
  };
};

const Page = ({ params }: Context) => {
  return (
    <Modal>
      <div className="h-[92vh]">
        <EditOrNewCareerForm parallel="modal" careerId={params.careerId} />
      </div>
    </Modal>
  );
};

export default Page;
