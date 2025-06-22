import { FormInputField } from '@/components/ui/form-fields'
import { NrcInput } from '../NrcInput'

import { useFormContext } from 'react-hook-form'

import {
  TFatherDetailsSchema,
  TMotherDetailsSchema,
} from '@/validators/registration/studentDetailsForm'

export const FatherDetails = () => {
  const form = useFormContext<TFatherDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='father.name'
        label='အဘအမည်'
        placeholder='Eg- U Mg'
      />
      <NrcInput
        control={form.control}
        stateCodeName='father.nrc.stateCode'
        townshipCodeName='father.nrc.townshipCode'
        nrcTypeName='father.nrc.nrcType'
        nrcNumberName='father.nrc.nrcNumber'
      />
      <FormInputField
        control={form.control}
        name='father.age'
        label='အသက်'
      />
      <FormInputField
        control={form.control}
        name='father.ethnicity'
        label='လူမျိုး'
      />
      <FormInputField
        control={form.control}
        name='father.religion'
        label='ကိုးကွယ်သည့်ဘာသာ'
      />
      <FormInputField
        control={form.control}
        name='father.job'
        label='အလုပ်အကိုင်/ရာထူး/ဌာန'
      />
    </div>
  )
}

export const MotherDetails = () => {
  const form = useFormContext<TMotherDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='mother.name'
        label='အမိအမည်'
        placeholder='Eg- Daw Mg'
      />
      <NrcInput
        control={form.control}
        stateCodeName='mother.nrc.stateCode'
        townshipCodeName='mother.nrc.townshipCode'
        nrcTypeName='mother.nrc.nrcType'
        nrcNumberName='mother.nrc.nrcNumber'
      />
      <FormInputField
        control={form.control}
        name='mother.age'
        label='အသက်'
      />
      <FormInputField
        control={form.control}
        name='mother.ethnicity'
        label='လူမျိုး'
      />
      <FormInputField
        control={form.control}
        name='mother.religion'
        label='ကိုးကွယ်သည့်ဘာသာ'
      />
      <FormInputField
        control={form.control}
        name='mother.job'
        label='အလုပ်အကိုင်/ရာထူး/ဌာန'
      />
    </div>
  )
}
