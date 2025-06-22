import {
  FormInputField,
  FormSelectField,
  FormRadioGroupField,
} from '@/components/ui/form-fields'
import { RollNoInput } from '../RollNoInput'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { Separator } from '@/components/ui/seperator'

import { useFormContext, useFieldArray } from 'react-hook-form'

import { TEnrollmentsDetailsSchema } from '@/validators/registration/formalStudentRegistrationForm'

export const EnrollmentsDetails = () => {
  const form = useFormContext<TEnrollmentsDetailsSchema>()

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'enrollments',
  })

  return (
    <div className='flex flex-col gap-4 min-h-[550px]'>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className='flex flex-col gap-2'
        >
          <div className='flex justify-between'>
            <FormSelectField
              control={form.control}
              name={`enrollments.${index}.course`}
              label='သင်တန်းနှစ်'
              placeholder='Select one'
              items={[
                { key: 'first', label: 'ပထမနှစ်' },
                { key: 'second', label: 'ဒုတိယနှစ်' },
                { key: 'third', label: 'တတိယနှစ်' },
                { key: 'fourth', label: 'စတုတ္ထနှစ်' },
                { key: 'fifth', label: 'ပဉ္စမနှစ်' },
                { key: 'sixth', label: 'ဆဠမနှစ်' },
              ]}
              keyExtractor={item => item.key}
              labelExtractor={item => item.label}
            />
            <Button
              type='button'
              size='icon'
              variant='ghost'
              onClick={() => remove(index)}
            >
              <Trash2 />
            </Button>
          </div>
          <RollNoInput
            control={form.control}
            yearName={`enrollments.${index}.rollNo.year`}
            majorName={`enrollments.${index}.rollNo.major`}
            noName={`enrollments.${index}.rollNo.no`}
            label='ခုံအမှတ်'
          />
          <FormInputField
            control={form.control}
            name={`enrollments.${index}.academicYear`}
            label='ပညာသင်နှစ်'
          />
          <FormRadioGroupField
            control={form.control}
            name={`enrollments.${index}.status`}
            label='အောင်/ရှုံး'
            items={[
              { key: 'passed', label: 'အောင်' },
              { key: 'failed', label: 'ရှုံး' },
            ]}
            keyExtractor={item => item.key}
            labelExtractor={item => item.label}
          />
          <Separator />
        </div>
      ))}

      <Button
        type='button'
        onClick={() =>
          append({
            course: '',
            rollNo: {
              year: '' as unknown as number,
              major: '',
              no: '' as unknown as number,
            },
            academicYear: '' as unknown as number,
            status: '',
          })
        }
      >
        Add Enrollment
      </Button>
    </div>
  )
}
