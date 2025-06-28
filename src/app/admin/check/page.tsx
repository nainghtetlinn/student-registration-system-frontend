'use client'

import { Form } from '@/components/ui/form'
import { FormInputField } from '@/components/ui/form-fields'
import { Button } from '@/components/ui/button'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCheckUser } from '@/hooks/useAuth'

const UserSchema = z.object({
  email: z.string().email(),
})

type TUserSchema = z.infer<typeof UserSchema>

const CheckUser = () => {
  const mutation = useCheckUser()

  const form = useForm<TUserSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = async (data: TUserSchema) => {
    mutation.mutate(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid gap-2 max-w-lg mt-24'
      >
        <FormInputField
          control={form.control}
          name='email'
        />
        <Button>Search</Button>
      </form>
    </Form>
  )
}

export default CheckUser
