import { FieldValues, UseFormReturn } from 'react-hook-form';

type FormReturn<TFieldValues extends FieldValues = FieldValues> = UseFormReturn<TFieldValues> & {
  formId: string;
  onSubmit: (e?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined) => Promise<void>;
  disabled: boolean;
};

export { type FormReturn };
