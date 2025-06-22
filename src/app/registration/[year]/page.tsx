'use client'

import { MultistepForm } from '@/components/features/registration/MultistepForm'
import { studentDetailsFormSteps } from '@/components/features/registration/StudentDetailsForm'
import { studentRegisterationFormSteps } from '@/components/features/registration/StudentRegistrationForm'
import { formalStudentRegistrationFormSteps } from '@/components/features/registration/FormalStudentRegistrationForm'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  defaultFormalStudentRegistrationFormData,
  defaultStudentDetailsFormData,
  defaultStudentRegistrationFormData,
} from '@/lib/constants'
import { combinedFormalStudentRegistrationSchema } from '@/validators/registration/formalStudentRegistrationForm'
import { combinedStudentDetailsSchema } from '@/validators/registration/studentDetailsForm'
import { combinedStudentRegistrationSchema } from '@/validators/registration/studentRegistrationForm'

export default function Registration() {
  const studentRegistrationForm = useForm({
    resolver: zodResolver(combinedStudentRegistrationSchema),
    defaultValues: defaultStudentRegistrationFormData,
  })
  const studentDetailsForm = useForm({
    resolver: zodResolver(combinedStudentDetailsSchema),
    defaultValues: defaultStudentDetailsFormData,
  })
  const formalStudentRegistrationForm = useForm({
    resolver: zodResolver(combinedFormalStudentRegistrationSchema),
    defaultValues: defaultFormalStudentRegistrationFormData,
  })

  return (
    <div>
      <MultistepForm
        form={studentRegistrationForm}
        onSubmit={d => console.log(d)}
        steps={studentRegisterationFormSteps}
        title='ကျောင်းဝင်မှတ်ပုံတင်ခွင့်ပုံစံ'
        description='2024-2025 ပညာသင်နှစ်'
      />
      <MultistepForm
        form={studentDetailsForm}
        onSubmit={d => console.log(d)}
        steps={studentDetailsFormSteps}
        title='ကျောင်းသား/သူများ၏ကိုယ်ရေးမှတ်တမ်းပုံစံ'
        description='2024-2025 ပညာသင်နှစ်'
      />
      <MultistepForm
        form={formalStudentRegistrationForm}
        onSubmit={d => console.log(d)}
        steps={formalStudentRegistrationFormSteps}
        title='ကျောင်းသားဟောင်းမှတ်ပုံတင်ခွင့်ပုံစံ'
        description='2024-2025 ပညာသင်နှစ်'
      />
    </div>
  )
}
