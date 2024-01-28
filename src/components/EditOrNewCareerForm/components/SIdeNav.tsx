import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

const printFrontMatterValue = (frontMatterValue: unknown) => {
  /** @todo date format */
  // if (frontMatterValue instanceof Date) console.log(frontMatterValue);
  return String(frontMatterValue);
};

type Props = {
  tabsList: React.ReactNode;
  frontMatter: Record<string, unknown>;
  isEdit?: boolean;
};

export const SideNav = ({ tabsList, frontMatter, isEdit }: Props) => {
  return (
    <div className="hidden flex-col space-y-4 sm:flex md:order-2">
      <div className="grid gap-2">
        <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Mode
        </span>
        {tabsList}
      </div>
      <div className="grid gap-2">
        <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Meta
        </span>
        <div className="bg-muted rounded-md p-2 grid gap-4">
          {Object.keys(frontMatter).map((key) => (
            <div key={key}>
              <div className="capitalize text-xs font-bold">{key}</div>
              <div className="text-sm">{printFrontMatterValue(frontMatter[key])}</div>
            </div>
          ))}
        </div>
      </div>
      {isEdit && (
        <div className="grid gap-2">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="instructions" className="font-medium leading-none">
              Change Log
            </Label>
            <Textarea id="instructions" placeholder="Fix the grammar." />
          </div>
        </div>
      )}
    </div>
  );
};
