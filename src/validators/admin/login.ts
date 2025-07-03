import { z } from 'zod'

export const checkUserSchema = z.object({
  email: z.string().email(),
})

export const confirmUserSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(1),
    password: z.string().min(8),
    confirm: z.string().min(8),
  })
  .refine(data => data.password === data.confirm, {
    message: 'Please confirm password',
    path: ['confirm'],
  })

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type TCheckUserSchema = z.infer<typeof checkUserSchema>
export type TConfirmUserSchema = z.infer<typeof confirmUserSchema>
export type TLoginUserSchema = z.infer<typeof loginUserSchema>
