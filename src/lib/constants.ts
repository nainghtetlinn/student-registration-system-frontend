import { TCombinedStudentDetailsSchema } from '@/validators/registration/studentDetailsForm'
import { TCombinedStudentRegistrationSchema } from '@/validators/registration/studentRegistrationForm'
import { TCombinedFormalStudentRegistrationSchema } from '@/validators/registration/formalStudentRegistrationForm'

const defaultNumber = '' as unknown as number

const defaultDate = '' as unknown as Date

const defaultName = { en: '', mm: '' }

export const defaultNrc = {
  stateCode: '',
  townshipCode: '',
  nrcType: '',
  nrcNumber: '',
}

export const defaultRollNo = {
  year: defaultNumber,
  major: '',
  no: defaultNumber,
}

export const defaultStudentRegistrationFormData: TCombinedStudentRegistrationSchema =
  {
    courseName: '',
    student: {
      name: defaultName,
      gender: 'male',
      nrc: defaultNrc,
      dateOfBirth: defaultDate,
      rollNo: defaultRollNo,
      lastYearRollNo: defaultRollNo,
    },
    father: {
      name: defaultName,
      nrc: defaultNrc,
      job: '',
    },
    mother: {
      name: defaultName,
      nrc: defaultNrc,
      job: '',
    },
    matriculationExam: {
      rollNo: '',
      department: '',
      year: defaultNumber,
    },
    contacts: {
      parentAddress: '',
      parentContactNo: '',
      isLivedWithParents: 'true',
      email: '',
      emergencyAddress: '',
      emergencyContactNo: '',
      hostelAddress: '',
    },
    acknowledged: false,
  }

export const defaultStudentDetailsFormData: TCombinedStudentDetailsSchema = {
  student: {
    name: '',
    nrc: defaultNrc,
    dateOfBirth: defaultDate,
    rollNo: defaultRollNo,
    height: '',
    weight: '',
    bloodType: '',
    hobby: '',
  },
  father: {
    name: '',
    nrc: defaultNrc,
    age: defaultNumber,
    ethnicity: '',
    religion: '',
    job: '',
  },
  mother: {
    name: '',
    nrc: defaultNrc,
    age: defaultNumber,
    ethnicity: '',
    religion: '',
    job: '',
  },
  sibilings: [],
  contacts: {
    parentAddress: '',
    currentAddress: '',
    emergencyAddress: '',
    emergencyContactNo: '',
    hostelAddress: '',
  },
  specialJobs: {
    cropType: '',
    assetsType: '',
    salesProductType: '',
  },
  acknowledged: false,
}

export const defaultFormalStudentRegistrationFormData: TCombinedFormalStudentRegistrationSchema =
  {
    student: {
      name: defaultName,
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
      hadScholarship: 'no',
    },
    father: {
      name: defaultName,
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    mother: {
      name: defaultName,
      nrc: defaultNrc,
      acsc: '',
      ethnicity: '',
      religion: '',
      placeOfBirth: '',
      dateOfBirth: defaultDate,
    },
    contacts: {
      hostelAddress: '',
      currentAddress: '',
      contactNo: '',
      parentsAddress: '',
      parentsContactNo: '',
    },
    enrollments: [],
    supporter: {
      name: '',
      relationshipType: '',
      job: '',
      address: '',
    },
    acknowledged: false,
  }
