'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { LogIn, Loader2 } from 'lucide-react'
import { Form } from '@/components/ui/form'
import { FormInputField } from '@/components/ui/form-fields'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEmployeeLogin } from '@/hooks/useAuth'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type TLoginSchema = z.infer<typeof LoginSchema>

const AdminLogin = () => {
  const loginMutation = useEmployeeLogin()

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const onSubmit = async (data: TLoginSchema) => {
    setLoading(true)
    loginMutation.mutate(data, {
      onSettled: () => setLoading(false),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full max-w-xl'
      >
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <FormInputField
              control={form.control}
              name='email'
              label='Email'
              placeholder='example@gmail.com'
            />
            <FormInputField
              control={form.control}
              name='password'
              label='Password'
              type={show ? 'text' : 'password'}
            />
          </CardContent>
          <CardFooter className='flex justify-between'>
            <div className='flex gap-2'>
              <Checkbox
                id='show'
                onCheckedChange={d => setShow(!!d)}
              />
              <Label htmlFor='show'>Show password</Label>
            </div>
            <Button disabled={loading}>
              Login {loading ? <Loader2 className='animate-spin' /> : <LogIn />}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default AdminLogin
