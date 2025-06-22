import { z } from 'zod'

import { nameSchema } from '../nameSchema'
import { nrcSchema } from '../nrcSchema'

const parentDetailsSchema = z.object({
  name: nameSchema,
  nrc: nrcSchema,
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
