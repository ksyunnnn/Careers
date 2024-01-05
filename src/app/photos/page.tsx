import Link from 'next/link';

const Page = () => {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section>
      {photos.map((id) => (
        <Link
          className="card border rounded-sm p-4 px-6 m-4 inline-block"
          key={id}
          href={`/photos/${id}`}
          passHref
        >
          {id}
        </Link>
      ))}
    </section>
  );
};

export default Page;
