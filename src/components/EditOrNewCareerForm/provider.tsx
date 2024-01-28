import { FormProvider, useFormContext } from 'react-hook-form';
import { FormValues } from './types';

const EditOrNewCareerFormProvider = FormProvider;

const useEditOrNewCareerFormContext = useFormContext<FormValues>;

export { EditOrNewCareerFormProvider, useEditOrNewCareerFormContext };
