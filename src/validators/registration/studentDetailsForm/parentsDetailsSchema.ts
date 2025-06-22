import { z } from 'zod'

import { nrcSchema } from '../nrcSchema'

const parentDetailsSchema = z.object({
  name: z.string().min(1),
  nrc: nrcSchema,
  age: z.coerce.number().gt(0),
  ethnicity: z.string().min(1),
  religion: z.string().min(1),
  job: z.string().min(1),
})

export const fatherDetailsSchema = z.object({
  father: parentDetailsSchema,
})

export const motherDetailsSchema = z.object({
  mother: parentDetailsSchema,
})

export type TFatherDetailsSchema = z.infer<typeof fatherDetailsSchema>
export type TMotherDetailsSchema = z.infer<typeof motherDetailsSchema>
