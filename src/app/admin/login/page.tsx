'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import { FormInputField } from '@/components/ui/form-fields'
import { Label } from '@/components/ui/label'
import { Loader2, LogIn } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useEmployeeLogin } from '@/hooks/useAuth'
import { LoginUserSchema, TLoginUserSchema } from '@/validators/admin/login'

const AdminLogin = () => {
  const router = useRouter()
  const loginMutation = useEmployeeLogin()

  const form = useForm<TLoginUserSchema>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const onSubmit = async (data: TLoginUserSchema) => {
    setLoading(true)
    loginMutation.mutate(data, {
      onSuccess: (result: {
        data: {
          accessToken: string
          currentUser: {
            department: string
            email: string
            name: string
            role: string
          }
        }
      }) => {
        router.push('/admin')
      },
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
            <div className='flex gap-2'>
              <Checkbox
                id='show'
                onCheckedChange={d => setShow(!!d)}
              />
              <Label htmlFor='show'>Show password</Label>
            </div>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Link
              href='/admin/login/check'
              className='text-sm underline hover:opacity-70'
            >
              New user?
            </Link>
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
