import { z } from 'zod';
import { formValuesSchema } from './schema';

export type FormValues = z.infer<typeof formValuesSchema>;
