type Context = {
  params: {
    careerId: string;
  };
};

const Page = (context: Context) => {
  return <>id: {context.params.careerId}</>;
};

export default Page;
