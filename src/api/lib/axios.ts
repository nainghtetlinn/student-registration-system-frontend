import axios, { AxiosError } from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
})

axiosInstance.interceptors.request.use(
  config => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

export default axiosInstance

interface ApiError {
  message: string
  statusCode?: number
  data?: unknown
}

export function getApiError(error: unknown): ApiError {
  if (error instanceof AxiosError) {
    return {
      message:
        error.response?.data?.message ||
        error.message ||
        'Something went wrong',
      statusCode: error.response?.data.code,
      data: error.response?.data.data,
    }
  }

  if (error instanceof Error) {
    return { message: error.message }
  }

  return { message: 'Unknown error' }
}
