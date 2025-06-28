import axios from '@/lib/axios'

interface CheckUserPayload {
  email: string
}

interface EmployeeLoginPayload {
  email: string
  password: string
}

export const authService = {
  checkUser: async (data: CheckUserPayload) => {
    const res = await axios.post('/tutgi/api/v1/auth/check', data)
    return res.data
  },
  employeeLogin: async (data: EmployeeLoginPayload) => {
    const res = await axios.post('/tutgi/api/v1/auth/employee/login', data)
    return res.data
  },
}
