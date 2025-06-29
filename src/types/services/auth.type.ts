type EmployeeRegisterPayload = {
  userType: 'Employee'
  department: string
  email: string
  role: string
}

type StudentRegisterPayload = {
  userType: 'Student'
  rollNo: string
  nrc: string
}

export type RegisterPayload = EmployeeRegisterPayload | StudentRegisterPayload

export type CheckUserPayload = {
  email: string
}

export type ConfirmUserPayload = {
  email: string
  name: string
  password: string
}

export type EmployeeLoginPayload = {
  email: string
  password: string
}

export type StudentLoginPayload = {
  rollNo: string
  nrc: string
}
