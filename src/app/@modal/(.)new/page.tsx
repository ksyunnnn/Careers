import { Modal } from '../(.)photos/[id]/modal';
import { EditCareerForm } from '@/components/EditCareerForm';

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
