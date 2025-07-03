import { z } from 'zod'
import { nrcSchema } from '../registration/nrcSchema'
import { rollNoSchema } from '../registration/rollNoSchema'

export const registerStudentSchema = z.object({
  userType: z.literal('Student'),
  rollNo: rollNoSchema,
  nrc: nrcSchema,
})

export const registerEmployeeSchema = z.object({
  userType: z.literal('Employee'),
  department: z.string().min(1),
  email: z.string().email(),
  role: z.string().min(1),
})

export type TRegisterStudentSchema = z.infer<typeof registerStudentSchema>
export type TRegisterEmployeeSchema = z.infer<typeof registerEmployeeSchema>
