import { EditProfilesForm } from '@/components/EditProfilesForm';
import { Typography } from '@/components/Typography';

export const runtime = 'edge';

const Page = () => {
  return (
    <div className="space-y-6 py-10">
      <Typography variant="h3">Account</Typography>
      <EditProfilesForm />
    </div>
  );
};

export default Page;
