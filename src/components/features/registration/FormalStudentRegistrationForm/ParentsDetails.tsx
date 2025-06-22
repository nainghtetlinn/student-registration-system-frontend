import { FormInputField } from '@/components/ui/form-fields'
import { NrcInput } from '../NrcInput'
import { DobPicker } from '../DobPicker'

import { useFormContext } from 'react-hook-form'

import {
  TFatherDetailsSchema,
  TMotherDetailsSchema,
} from '@/validators/registration/formalStudentRegistrationForm'

export const FatherDetails = () => {
  const form = useFormContext<TFatherDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='father.name.en'
        label='အဘအမည် (အင်္ဂလိပ်)'
        placeholder='Eg- U Mg'
      />
      <FormInputField
        control={form.control}
        name='father.name.mm'
        label='အဘအမည် (မြန်မာ)'
        placeholder='Eg- ဦးမောင်'
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
        name='father.acsc'
        label='ဧည့်နိုင်ငံသားလက်မှတ်အမှတ်'
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
        name='father.placeOfBirth'
        label='မွေးဖွားရာဒေသ'
      />
      <DobPicker
        control={form.control}
        name='father.dateOfBirth'
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
        name='mother.name.en'
        label='အမိအမည် (အင်္ဂလိပ်)'
        placeholder='Eg- U Mg'
      />
      <FormInputField
        control={form.control}
        name='mother.name.mm'
        label='အမိအမည် (မြန်မာ)'
        placeholder='Eg- ဦးမောင်'
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
        name='mother.acsc'
        label='ဧည့်နိုင်ငံသားလက်မှတ်အမှတ်'
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
        name='mother.placeOfBirth'
        label='မွေးဖွားရာဒေသ'
      />
      <DobPicker
        control={form.control}
        name='mother.dateOfBirth'
      />
    </div>
  )
}
