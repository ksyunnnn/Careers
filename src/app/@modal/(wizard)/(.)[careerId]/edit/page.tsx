import { EditOrNewCareerForm } from '@/components/EditOrNewCareerForm';
import { Modal } from '@/components/Modal';

type Context = {
  params: {
    careerId: string;
  };
};

const Page = ({ params }: Context) => {
  console.log('debug', { params });
  return (
    <Modal>
      <div className="h-[92vh]">
        <EditOrNewCareerForm parallel="modal" careerId={params.careerId} />
      </div>
    </Modal>
  );
};

export default Page;
