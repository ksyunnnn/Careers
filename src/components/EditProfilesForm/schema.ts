import { z } from 'zod';

export const formValuesSchema = z.object({
  user_name: z.string().min(1, { message: 'Display name is required' }),
});
