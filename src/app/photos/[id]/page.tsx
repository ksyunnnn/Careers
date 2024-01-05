import Link from 'next/link';

const PhotoPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="grid place-content-center text-center h-[100vh]">
      <div>
        Photo id: {id}
        <div>
          <Link href={'/'} className="underline">
            TOP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
