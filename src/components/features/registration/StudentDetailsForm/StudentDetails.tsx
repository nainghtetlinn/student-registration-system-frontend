import { FormInputField, FormSelectField } from '@/components/ui/form-fields'
import { DobPicker } from '../DobPicker'
import { NrcInput } from '../NrcInput'
import { RollNoInput } from '../RollNoInput'

import { useFormContext } from 'react-hook-form'

import { TStudentDetailsSchema } from '@/validators/registration/studentDetailsForm'

export const StudentDetails = () => {
  const form = useFormContext<TStudentDetailsSchema>()

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      <FormInputField
        control={form.control}
        name='student.name'
        label='အမည်'
        placeholder='Eg- Mg Mg'
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
        label='ယခုနှစ်ခုံအမှတ်'
      />
      <FormInputField
        control={form.control}
        name='student.height'
        label='အရပ်'
        placeholder='Eg- 5 ft 9 in'
      />
      <FormInputField
        control={form.control}
        name='student.weight'
        label='ကိုယ်အလေးချိန်'
        placeholder='Eg- 100 lb'
      />
      <FormSelectField
        control={form.control}
        name='student.bloodType'
        label='သွေးအုပ်စု'
        placeholder='Select blood type'
        items={[
          { key: 'A+' },
          { key: 'A-' },
          { key: 'B+' },
          { key: 'B-' },
          { key: 'AB+' },
          { key: 'AB-' },
          { key: 'O+' },
          { key: 'O-' },
        ]}
        keyExtractor={item => item.key}
      />
      <FormInputField
        control={form.control}
        name='student.hobby'
        label='ဝါသနာ(အားကစား/ဂီတ/အနုပညာစသည့်)နှင့် ထူးချွန်မှုအဆင့်'
      />
    </div>
  )
}
