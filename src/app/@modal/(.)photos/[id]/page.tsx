import { Modal } from './modal';

const PhotoModal = ({ params: { id: photoId } }: { params: { id: string } }) => {
  return <Modal>photoId :: {photoId}</Modal>;
};

export default PhotoModal;
