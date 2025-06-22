import { FormInputField } from '@/components/ui/form-fields'

import { useFormContext } from 'react-hook-form'

import { TContactsDetailsSchema } from '@/validators/registration/formalStudentRegistrationForm'

export const ContactsDetails = () => {
  const form = useFormContext<TContactsDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='contacts.hostelAddress'
        label='အဆောင်လိပ်စာ'
      />
      <FormInputField
        control={form.control}
        name='contacts.currentAddress'
        label='နေရပ်လိပ်စာ'
      />
      <FormInputField
        control={form.control}
        name='contacts.contactNo'
        label='ဆက်သွယ်ရန် တယ်လီဖုန်းနံပါတ်'
      />
      <FormInputField
        control={form.control}
        name='contacts.parentsAddress'
        label='မိဘနေရပ်လိပ်စာ'
      />
      <FormInputField
        control={form.control}
        name='contacts.parentsContactNo'
        label='ဆက်သွယ်ရန် တယ်လီဖုန်းနံပါတ်'
      />
    </div>
  )
}
