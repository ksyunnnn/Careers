import { z } from 'zod';
import { formValuesSchema } from './schema';
import { FormReturn } from '@/types/form';

export type FormValues = z.infer<typeof formValuesSchema>;

export type ReturnType = FormReturn<FormValues>;
