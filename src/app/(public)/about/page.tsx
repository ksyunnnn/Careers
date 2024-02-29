import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as Icons from '@/icons';

type PageContext = {};

export const runtime = 'edge';

const Page = ({}: PageContext) => {
  return (
    <div className="bg-background grid place-content-center min-h-content-min-height">
      <div className="min-w-80 space-y-4 container pt-10 pb-32">
        <div>
          <h2 className="text-sm">About Career Shelf</h2>
        </div>
        <div className="text-4xl leading-relaxed">
          <div>
            <strong>Name of the Service:</strong> Career Shelf
          </div>
          <div>
            <strong>Description:</strong> Career Shelf is a free service designed to assist
            individuals in creating their Curriculum Vitae (CV) by organizing their career
            experiences. It caters specifically to individuals with extensive professional
            backgrounds who struggle to structure their CV effectively.
          </div>
          <div>
            <strong>Target Audience:</strong> Career Shelf is ideal for individuals with a wealth of
            experience who need assistance in compiling their CVs.
          </div>
          <div>
            <strong>Key Features/Benefits:</strong> Career Shelf offers a unique approach to CV
            creation by allowing users to manage each of their career experiences efficiently. This
            eliminates the need to constantly update and rewrite resumes whenever new experiences
            arise, saving time and effort. Additionally, Career Shelf utilizes ChatGPT, an
            AI-powered chat interface, to guide users through the CV creation process. Users simply
            need to respond to questions posed by ChatGPT, and their CV base is automatically
            generated for each career experience.
          </div>
          <div>
            <strong>How It Works:</strong> Users can create individual {`"Careers"`} within the
            platform, representing each of their professional experiences. They can input this
            information either by entering text or by answering questions provided by the platform.
            Career Shelf then compiles this information into a structured CV format.
          </div>
          <div>
            <strong>Pricing:</strong> Career Shelf is completely free to use.
          </div>
          <div>
            <strong>Availability:</strong> Currently available in English, with plans to support
            Japanese language in the future.
          </div>
          <div>
            <strong>Support/Contact Information:</strong> For support or inquiries, users can
            contact Career Shelf via texts at{' '}
            <Link href="https://www.linkedin.com/in/synsk/" className="underline" target="_blank">
              https://www.linkedin.com/in/synsk/
            </Link>
          </div>
        </div>
        <div>
          <Button asChild variant="ghost">
            <Link href="/dashboard">
              <Icons.SignIn className="mr-2 h-4 w-4" />
              Go into Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
