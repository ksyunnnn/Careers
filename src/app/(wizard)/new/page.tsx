import { EditCareerForm } from '@/components/EditCareerForm';

export const runtime = 'edge';

const CareerPage = () => {
  return (
    <div className="h-[100vh]">
      <EditCareerForm />
    </div>
  );
};

export default CareerPage;
