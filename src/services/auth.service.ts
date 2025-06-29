import axios from '@/lib/axios'

import {
  RegisterPayload,
  CheckUserPayload,
  ConfirmUserPayload,
  EmployeeLoginPayload,
  StudentLoginPayload,
} from '@/types/services/auth.type'

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
  studentLogin: async (data: StudentLoginPayload) => {
    const res = await axios.post('/tutgi/api/v1/auth/students/login', data)
    return res.data
  },
  getMe: async () => {
    const res = await axios.get('/tutgi/api/v1/auth/me')
    return res.data
  },
}
