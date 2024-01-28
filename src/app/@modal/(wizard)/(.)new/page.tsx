import { EditOrNewCareerForm } from '@/components/EditOrNewCareerForm';
import { Modal } from '@/components/Modal';

const Page = () => {
  return (
    <Modal>
      <div className="h-[92vh]">
        <EditOrNewCareerForm parallel="modal" />
      </div>
    </Modal>
  );
};

export default Page;
