import { FormInputField } from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TSupporterDetailsSchema } from '@/validators/registration/formalStudentRegistrationForm'

export const SupporterDetails = () => {
  const form = useFormContext<TSupporterDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='supporter.name'
        label='အမည်'
      />
      <FormInputField
        control={form.control}
        name='supporter.relationshipType'
        label='တော်စပ်ပုံ'
      />
      <FormInputField
        control={form.control}
        name='supporter.job'
        label='အလုပ်အကိုင်'
      />
      <FormInputField
        control={form.control}
        name='supporter.address'
        label='နေရပ်လိပ်စာ'
      />
    </div>
  )
}
