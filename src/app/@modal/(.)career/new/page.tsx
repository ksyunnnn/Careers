import CareerPage from '@/app/(wizard)/career/new/page';
import { Modal } from '../../(.)photos/[id]/modal';

const Page = ({ params: { id: photoId } }: { params: { id: string } }) => {
  return (
    <Modal>
      <CareerPage />
    </Modal>
  );
};

export default Page;
