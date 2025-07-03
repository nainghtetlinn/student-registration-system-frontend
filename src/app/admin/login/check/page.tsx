'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { FormInputField } from '@/components/ui/form-fields'
import { Loader2, Search } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCheckUser } from '@/hooks/useAuth'
import { checkUserSchema, TCheckUserSchema } from '@/validators/admin/login'

const CheckUser = () => {
  const router = useRouter()
  const checkMutation = useCheckUser()

  const form = useForm<TCheckUserSchema>({
    resolver: zodResolver(checkUserSchema),
    defaultValues: { email: '' },
  })
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: TCheckUserSchema) => {
    setLoading(true)
    checkMutation.mutate(data, {
      onSuccess: (result: { data: { loginFirstTime: boolean } }) => {
        if (result.data.loginFirstTime) {
          router.push('/admin/login/confirm')
        } else {
          router.push('/admin/login')
        }
      },
      onSettled: () => {
        setLoading(false)
      },
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
            <CardTitle>Search Account</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <FormInputField
              control={form.control}
              name='email'
              label='Email'
              placeholder='example@gmail.com'
            />
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button disabled={loading}>
              Search{' '}
              {loading ? <Loader2 className='animate-spin' /> : <Search />}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default CheckUser
