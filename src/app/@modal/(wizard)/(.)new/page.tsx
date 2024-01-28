import { EditCareerForm } from '@/components/EditOrNewCareerForm';
import { Modal } from '@/components/Modal';

const Page = () => {
  return (
    <Modal>
      <div className="h-[92vh]">
        <EditCareerForm parallel="modal" />
      </div>
    </Modal>
  );
};

export default Page;
