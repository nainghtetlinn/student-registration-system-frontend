import { z } from 'zod'

import { studentDetailsSchema } from './studentDetailsSchema'
import {
  fatherDetailsSchema,
  motherDetailsSchema,
} from './parentsDetailsSchema'
import { sibilingsDetailsSchema } from './sibilingsDetailsSchema'
import { contactsDetailsSchema } from './contactsDetailsSchema'
import { specialJobsDetailsSchema } from './specialJobsDetailsSchema'
import { acknowledgementSchema } from './acknowledgementSchema'

export const combinedStudentDetailsSchema = studentDetailsSchema
  .merge(fatherDetailsSchema)
  .merge(motherDetailsSchema)
  .merge(sibilingsDetailsSchema)
  .merge(contactsDetailsSchema)
  .merge(specialJobsDetailsSchema)
  .merge(acknowledgementSchema)

export type TCombinedStudentDetailsSchema = z.infer<
  typeof combinedStudentDetailsSchema
>

export * from './studentDetailsSchema'
export * from './parentsDetailsSchema'
export * from './sibilingsDetailsSchema'
export * from './contactsDetailsSchema'
export * from './specialJobsDetailsSchema'
export * from './acknowledgementSchema'
