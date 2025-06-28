import { z } from 'zod'

export const CheckUserSchema = z.object({
  email: z.string().email(),
})

export type TCheckUserSchema = z.infer<typeof CheckUserSchema>

export const ConfirmUserSchema = z
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

export type TConfirmUserSchema = z.infer<typeof ConfirmUserSchema>

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type TLoginUserSchema = z.infer<typeof LoginUserSchema>
