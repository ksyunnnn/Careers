import { DialogForLogin } from '@/components/DialogForLogin';
import { SignupForm } from '@/components/SignupForm';
import { Button } from '@/components/ui/button';
import * as Icons from '@/icons';
import { createSupabaseServerClient } from '@/lib/supabaseServerClient';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

const Page = async () => {
  const supabase = createSupabaseServerClient();
  const session = await getSession({
    client: supabase,
  });

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="bg-background grid place-content-center min-h-content-min-height">
      <div className="min-w-80 space-y-6 -mt-16">
        <h2 className="text-4xl">Join today</h2>
        <SignupForm />
        <div className="flex items-center gap-1">
          Already have an account?
          <DialogForLogin>
            <Button variant="link" className="inline-flex">
              <Icons.SignIn className="mr-1 h-4 w-4" />
              Login
            </Button>
          </DialogForLogin>
        </div>
      </div>
    </div>
  );
};

export default Page;
