import { EditCareerForm } from '@/components/EditCareerForm';
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
