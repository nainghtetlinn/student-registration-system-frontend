'use client'

import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { MatriculationExamDetails } from './MatriculationExamDetails'
import { FatherDetails, MotherDetails } from './ParentsDetails'
import { StudentDetails } from './StudentDetails'

import { type TCombinedStudentRegistrationSchema } from '@/validators/registration/studentRegistrationForm'

import { TStep } from '../MultistepForm'

export const studentRegisterationFormSteps: TStep<TCombinedStudentRegistrationSchema>[] =
  [
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
  ]
