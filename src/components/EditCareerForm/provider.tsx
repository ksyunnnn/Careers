import { FormProvider, useFormContext } from 'react-hook-form';
import { FormValues } from './types';

const EditCareerFormProvider = FormProvider;

const useEditCareerFormContext = useFormContext<FormValues>;

export { EditCareerFormProvider, useEditCareerFormContext };
