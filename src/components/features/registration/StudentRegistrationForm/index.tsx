'use client'

import { MultistepForm } from '../MultistepForm'
import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { MatriculationExamDetails } from './MatriculationExamDetails'
import { FatherDetails, MotherDetails } from './ParentsDetails'
import { StudentDetails } from './StudentDetails'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { defaultStudentRegistrationFormData } from '@/lib/constants'
import {
  combinedStudentRegistrationSchema,
  type TCombinedStudentRegistrationSchema,
} from '@/validators/registration/studentRegistrationForm'

export const StudentRegisterationForm = () => {
  const form = useForm<TCombinedStudentRegistrationSchema>({
    resolver: zodResolver(combinedStudentRegistrationSchema),
    defaultValues: defaultStudentRegistrationFormData,
  })

  const onSubmit = (data: TCombinedStudentRegistrationSchema) => {
    console.log(data)
  }

  return (
    <MultistepForm
      title='ကျောင်းဝင်မှတ်ပုံတင်ခွင့်ပုံစံ'
      description='2024-2025 ပညာသင်နှစ်'
      form={form}
      onSubmit={onSubmit}
      steps={[
        {
          position: 1,
          title: 'ကျောင်းသားကိုဃ်ရေးအချက်အလက်',
          component: <StudentDetails />,
          fields: ['courseName', 'student'],
        },
        {
          position: 2,
          title: 'အဖအချက်အလက်',
          component: <FatherDetails />,
          fields: ['father'],
        },
        {
          position: 3,
          title: 'အမိအချက်အလက်',
          component: <MotherDetails />,
          fields: ['mother'],
        },
        {
          position: 4,
          title: 'တက္ကသိုလ်ဝင်တန်းအချက်အလက်',
          component: <MatriculationExamDetails />,
          fields: ['matriculationExam'],
        },
        {
          position: 5,
          title: 'ဆက်သွယ်ရန်အချက်အလက်',
          component: <ContactsDetails />,
          fields: ['contacts'],
        },
        {
          position: 6,
          title: '',
          component: <AcknowledgementDetails />,
          fields: ['acknowledged'],
        },
      ]}
    />
  )
}
