'use client'

import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { EnrollmentsDetails } from './EnrollmentsDetails'
import { FatherDetails, MotherDetails } from './ParentsDetails'
import { StudentDetails } from './StudentDetails'
import { SupporterDetails } from './SupporterDetails'

import { TCombinedFormalStudentRegistrationSchema } from '@/validators/registration/formalStudentRegistrationForm'

import { TStep } from '../MultistepForm'

export const formalStudentRegistrationFormSteps: TStep<TCombinedFormalStudentRegistrationSchema>[] =
  [
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
      title: 'ဆက်သွယ်ရန်လိပ်စာ',
      component: <ContactsDetails />,
      fields: ['contacts'],
    },
    {
      position: 5,
      title: 'တက်ရောက်ခဲ့သည့်သင်တန်းခုံအမှတ်များ',
      component: <EnrollmentsDetails />,
      fields: ['enrollments'],
    },
    {
      position: 6,
      title: 'ကျောင်းနေရန်ထောက်ပံ့ပေးမည့်ပုဂ္ဂိုလ်',
      component: <SupporterDetails />,
      fields: ['supporter'],
    },
    {
      position: 7,
      title: '',
      component: <AcknowledgementDetails />,
      fields: ['acknowledged'],
    },
  ]
