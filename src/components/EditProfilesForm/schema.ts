import { z } from 'zod';

export const formValuesSchema = z.object({
  displayName: z.string().nonempty({ message: 'Display name is required' }),
});
