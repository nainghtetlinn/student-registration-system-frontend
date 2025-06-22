'use client'

import { AcknowledgementDetails } from './AcknowledgementDetails'
import { ContactsDetails } from './ContactsDetails'
import { FatherDetails, MotherDetails } from './ParentsDetails'
import { SiblingsDetails } from './SiblingsDetails'
import { SpecialJobsDetails } from './SpecialJobsDetails'
import { StudentDetails } from './StudentDetails'

import { TCombinedStudentDetailsSchema } from '@/validators/registration/studentDetailsForm'

import { TStep } from '../MultistepForm'

export const studentDetailsFormSteps: TStep<TCombinedStudentDetailsSchema>[] = [
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
]
