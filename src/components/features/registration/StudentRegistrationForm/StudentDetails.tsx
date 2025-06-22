import {
  FormInputField,
  FormRadioGroupField,
  FormSelectField,
} from '@/components/ui/form-fields'
import { DobPicker } from '../DobPicker'
import { NrcInput } from '../NrcInput'
import { RollNoInput } from '../RollNoInput'

import { useFormContext } from 'react-hook-form'

import { TStudentDetailsSchema } from '@/validators/registration/studentRegistrationForm'

export const StudentDetails = () => {
  const form = useFormContext<TStudentDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormSelectField
        control={form.control}
        name='courseName'
        label='မည်သည့်ခုနှစ်သင်တန်း'
        placeholder='အခုနှစ်သင်တန်း'
        items={[
          { key: 'first', label: 'ပထမနှစ်သင်တန်း' },
          { key: 'second', label: 'ဒုတိယနှစ်သင်တန်း' },
          { key: 'third', label: 'တတိယနှစ်သင်တန်း' },
          { key: 'fourth', label: 'စတုတ္ထနှစ်သင်တန်း' },
          { key: 'fifth', label: 'ပဉ္စမနှစ်သင်တန်း' },
          { key: 'sixth', label: 'ဆဠမနှစ်သင်တန်း' },
        ]}
        keyExtractor={item => item.key}
        labelExtractor={item => item.label}
      />
      <FormInputField
        control={form.control}
        name='student.name.en'
        label='အမည် (အင်္ဂလိပ်)'
        placeholder='Eg- Mg Mg'
      />
      <FormInputField
        control={form.control}
        name='student.name.mm'
        label='အမည် (မြန်မာ)'
        placeholder='Eg- မောင်မောင်'
      />
      <FormRadioGroupField
        control={form.control}
        name='student.gender'
        label='ကျောင်းသား/သူ'
        items={[
          { key: 'male', label: 'ကျောင်းသား' },
          { key: 'female', label: 'ကျောင်းသူ' },
        ]}
        keyExtractor={item => item.key}
        labelExtractor={item => item.label}
      />
      <NrcInput
        control={form.control}
        stateCodeName='student.nrc.stateCode'
        townshipCodeName='student.nrc.townshipCode'
        nrcTypeName='student.nrc.nrcType'
        nrcNumberName='student.nrc.nrcNumber'
      />
      <DobPicker
        control={form.control}
        name='student.dateOfBirth'
      />
      <RollNoInput
        control={form.control}
        yearName='student.rollNo.year'
        majorName='student.rollNo.major'
        noName='student.rollNo.no'
        label='သင်တန်းခုံအမှတ်'
      />
      <RollNoInput
        control={form.control}
        yearName='student.lastYearRollNo.year'
        majorName='student.lastYearRollNo.major'
        noName='student.lastYearRollNo.no'
        label='လွန်ခဲ့သောနှစ်မှစာမေးပွဲခုံအမှတ်'
      />
    </div>
  )
}
