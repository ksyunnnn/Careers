import { EditOrNewCareerForm } from '@/components/EditOrNewCareerForm';

export const runtime = 'edge';

const CareerPage = () => {
  return (
    <div className="h-[100vh]">
      <EditOrNewCareerForm />
    </div>
  );
};

export default CareerPage;
