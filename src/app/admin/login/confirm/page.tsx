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
import { Check, Loader2 } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useConfirmUser } from '@/hooks/useAuth'
import { ConfirmUserSchema, TConfirmUserSchema } from '@/validators/admin/login'

const ConfirmUser = () => {
  const router = useRouter()
  const confirmMutation = useConfirmUser()

  const form = useForm<TConfirmUserSchema>({
    resolver: zodResolver(ConfirmUserSchema),
    defaultValues: { name: '', email: '', password: '', confirm: '' },
  })
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const onSubmit = async (data: TConfirmUserSchema) => {
    setLoading(true)
    confirmMutation.mutate(data, {
      onSuccess: (result: { data: boolean }) => {
        if (result.data) {
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
            <CardTitle>Confirm Account</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <FormInputField
              control={form.control}
              name='name'
              label='Name'
            />
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
            <FormInputField
              control={form.control}
              name='confirm'
              label='Confirm password'
              type='password'
            />
          </CardContent>
          <CardFooter className='flex justify-between'>
            <div className='flex gap-2'>
              <Checkbox
                id='show'
                onCheckedChange={c => setShow(!!c)}
              />
              <Label htmlFor='show'>Show password</Label>
            </div>
            <Button disabled={loading}>
              Confirm{' '}
              {loading ? <Loader2 className='animate-spin' /> : <Check />}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

export default ConfirmUser
