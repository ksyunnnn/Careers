import { PresetActions } from '@/components/PresetActions';
import { PresetSelector } from '@/components/EditOrNewCareerForm/components/PresetSelector';
import { PresetShare } from '@/components/PresetShare';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Parallel } from '@/types/globals';

type Props = {
  parallel?: Parallel;
  isEdit?: boolean;
  disabled?: boolean;
  formId: string;
};

export const Header = ({ parallel = 'default', isEdit, disabled = false, formId }: Props) => {
  return (
    <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      {parallel === 'default' && (
        <Button asChild variant="secondary" className="mr-2">
          <Link href="/dashboard">back</Link>
        </Button>
      )}
      <h2 className="text-lg font-semibold">{isEdit ? 'Edit' : 'New'}</h2>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <PresetSelector />
        <Button variant="secondary" disabled={disabled} form={formId}>
          Save
        </Button>
        <div className="hidden space-x-2 md:flex">
          <PresetShare />
        </div>
        <PresetActions />
      </div>
    </div>
  );
};
