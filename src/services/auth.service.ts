import axios from '@/lib/axios'

interface EmployeeRegisterPayload {
  userType: 'Employee'
  department: string
  email: string
  role: string
}

interface StudentRegisterPayload {
  userType: 'Student'
  rollNo: string
  nrc: string
}

type RegisterPayload = EmployeeRegisterPayload | StudentRegisterPayload

interface CheckUserPayload {
  email: string
}

interface ConfirmUserPayload {
  email: string
  name: string
  password: string
}

interface EmployeeLoginPayload {
  email: string
  password: string
}

export const authService = {
  register: async (data: RegisterPayload) => {
    const res = await axios.post('/tutgi/api/v1/admin/register', data)
    return res.data
  },
  checkUser: async (data: CheckUserPayload) => {
    const res = await axios.post('/tutgi/api/v1/auth/check', data)
    return res.data
  },
  confirmUser: async (data: ConfirmUserPayload) => {
    const res = await axios.patch('/tutgi/api/v1/auth/confirm', data)
    return res.data
  },
  employeeLogin: async (data: EmployeeLoginPayload) => {
    const res = await axios.post('/tutgi/api/v1/auth/employee/login', data)
    localStorage.setItem('token', res.data.data.accessToken)
    return res.data
  },
}
