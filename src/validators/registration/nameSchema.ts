import { z } from 'zod'

export const nameSchema = z.object({
  mm: z
    .string()
    .trim()
    .min(1)
    .regex(/^[\u1000-\u109F\uAA60-\uAA7F\uA9E0-\uA9FF\u200C\u200D\s]+$/),
  en: z
    .string()
    .trim()
    .min(1)
    .regex(/^[A-Za-z ]+$/),
})
