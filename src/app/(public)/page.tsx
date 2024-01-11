import { DialogForLogin } from '@/components/DialogForLogin';
import { LoginForm } from '@/components/LoginForm';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <>
      <div className="px-2 lg:px-4 min-h-header-height flex justify-between items-center">
        <div className="font-bold">Career Shelf</div>
        <DialogForLogin>
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </DialogForLogin>
      </div>
      <div>
        <div className="bg-background grid place-content-center min-h-content-min-height">
          <div className="min-w-80 space-y-6 -mt-16">
            <h2 className="text-4xl">Join today</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
