'use client';
import { useNewCareerForm, useEditCareerForm } from './hooks';
import { Parallel } from '@/types/globals';
import { Form } from './components/Form';

const NewCareerForm = ({ parallel = 'default' }: { parallel?: Parallel }) => {
  const methods = useNewCareerForm();

  return <Form methods={methods} parallel={parallel} />;
};

const EditCareerForm = ({
  parallel = 'default',
  careerId,
}: {
  parallel?: Parallel;
  careerId: string;
}) => {
  const methods = useEditCareerForm(careerId);

  return <Form methods={methods} parallel={parallel} isEdit />;
};

type Props = {
  parallel?: Parallel;
  careerId?: string;
};

export const EditOrNewCareerForm = ({ parallel = 'default', careerId }: Props) => {
  if (careerId) return <EditCareerForm parallel={parallel} careerId={careerId} />;
  return <NewCareerForm parallel={parallel} />;
};
