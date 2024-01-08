import { z } from 'zod';

export const formValuesSchema = z.object({
  body: z.string(),
});
