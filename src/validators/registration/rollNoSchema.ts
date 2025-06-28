import { z } from 'zod'

export const rollNoSchema = z.object({
  year: z.coerce.number().min(1).max(6),
  major: z
    .string()
    .refine(
      val => ['CIVIL', 'EC', 'EP', 'MECH', 'IT', 'MN'].includes(val),
      'Invalid major'
    ),
  no: z.coerce.number().gt(0),
})

export type TRollNoSchema = z.infer<typeof rollNoSchema>
