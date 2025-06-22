import { z } from 'zod'

import { studentDetailsSchema } from './studentDetailsSchema'
import { matriculationExamDetailsSchema } from './matriculationExamSchema'
import {
  fatherDetailsSchema,
  motherDetailsSchema,
} from './parentsDetailsSchema'
import { contactsSchema } from './contactsSchema'
import { acknowledgementSchema } from './acknowledgementSchema'

export const combinedStudentRegistrationSchema = studentDetailsSchema
  .merge(matriculationExamDetailsSchema)
  .merge(fatherDetailsSchema)
  .merge(motherDetailsSchema)
  .merge(contactsSchema)
  .merge(acknowledgementSchema)

export type TCombinedStudentRegistrationSchema = z.infer<
  typeof combinedStudentRegistrationSchema
>

export * from './studentDetailsSchema'
export * from './matriculationExamSchema'
export * from './parentsDetailsSchema'
export * from './contactsSchema'
export * from './acknowledgementSchema'
