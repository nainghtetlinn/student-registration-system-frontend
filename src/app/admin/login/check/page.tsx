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
import { useForm } from 'react-hook-form'

import { useCheckUser } from '@/api/hooks/useAuth'
import { checkUserSchema, TCheckUserSchema } from '@/validators/admin/login'

const CheckUser = () => {
  const router = useRouter()
  const { mutate, isPending } = useCheckUser()

  const form = useForm<TCheckUserSchema>({
    resolver: zodResolver(checkUserSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = async (data: TCheckUserSchema) => {
    mutate(data, {
      onSuccess: result => {
        if (result.data.loginFirstTime) {
          router.push('/admin/login/confirm?email=' + data.email)
        } else {
          router.push('/admin/login')
        }
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
            <Button disabled={isPending}>
              Search{' '}
              {isPending ? <Loader2 className='animate-spin' /> : <Search />}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default CheckUser
