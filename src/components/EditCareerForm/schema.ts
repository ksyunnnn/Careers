import { z } from 'zod';

export const formValuesSchema = z.object({
  contents: z.string(),
});
