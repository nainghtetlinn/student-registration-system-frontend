import axios from '@/lib/axios'

interface EmployeeLoginPayload {
  email: string
  password: string
}

export const authService = {
  employeeLogin: async (data: EmployeeLoginPayload) => {
    const res = await axios.post('/tutgi/api/v1/auth/employee/login', data)
    return res.data
  },
}
