import { z } from 'zod';

export const sendEmailFormSchema = z.object({
  email: z.string().min(2, {
    message: 'Email is required',
  }),
  message: z.string().min(5, {
    message: 'Message is required',
  })
});