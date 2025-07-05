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

/* ***********************************************
 * API Response data
 */
export type EmployeeLoginSuccessData = {
  data: {
    accessToken: string
    currentUser: {
      department: string
      email: string
      name: string
      role: string
    }
  }
}

export type CheckUserSuccessData = {
  data: {
    loginFirstTime: boolean
  }
}

export type ConfirmUserSuccessData = {
  data: boolean
}
