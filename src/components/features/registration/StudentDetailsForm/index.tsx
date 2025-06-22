'use client'

import { MultistepForm } from '../MultistepForm'
import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { FatherDetails, MotherDetails } from './ParentsDetails'
import { SiblingsDetails } from './SiblingsDetails'
import { SpecialJobsDetails } from './SpecialJobsDetails'
import { StudentDetails } from './StudentDetails'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { defaultStudentDetailsFormData } from '@/lib/constants'
import {
  combinedStudentDetailsSchema,
  TCombinedStudentDetailsSchema,
} from '@/validators/registration/studentDetailsForm'

export const StudentDetailsForm = () => {
  const form = useForm<TCombinedStudentDetailsSchema>({
    resolver: zodResolver(combinedStudentDetailsSchema),
    defaultValues: defaultStudentDetailsFormData,
  })

  const onSubmit = (data: TCombinedStudentDetailsSchema) => {
    console.log(data)
  }

  return (
    <MultistepForm
      title='ကျောင်းသား/သူများ၏ကိုယ်ရေးမှတ်တမ်းပုံစံ'
      description='2024-2025 ပညာသင်နှစ်'
      form={form}
      onSubmit={onSubmit}
      steps={[
        {
          position: 1,
          title: 'ကျောင်းသားကိုဃ်ရေးအချက်အလက်',
          component: <StudentDetails />,
          fields: ['student'],
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
          title: 'မွေးချင်းမောင်နှမအရင်းအချာများ',
          component: <SiblingsDetails />,
          fields: ['sibilings'],
        },
        {
          position: 5,
          title: 'ဆက်သွယ်ရန်အချက်အလက်',
          component: <ContactsDetails />,
          fields: ['contacts'],
        },
        {
          position: 6,
          title: 'အလုပ်အကိုင်အချက်အလက်',
          component: <SpecialJobsDetails />,
          fields: ['specialJobs'],
        },
        {
          position: 7,
          title: '',
          component: <AcknowledgementDetails />,
          fields: ['acknowledged'],
        },
      ]}
    />
  )
}
