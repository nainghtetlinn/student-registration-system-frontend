import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { getApiError } from '@/lib/utils'
import { authService } from '@/services/auth.service'

export const useRegister = () => {
  return useMutation({
    mutationFn: authService.register,
    onSuccess: data => {
      console.log(data)
      toast.success('Success')
    },
    onError: error => {
      const apiError = getApiError(error)
      toast.error(apiError.message)
    },
  })
}

export const useCheckUser = () => {
  return useMutation({
    mutationFn: authService.checkUser,
    onSuccess: () => {
      toast.success('Success')
    },
    onError: error => {
      const apiError = getApiError(error)
      toast.error(apiError.message)
    },
  })
}

export const useConfirmUser = () => {
  return useMutation({
    mutationFn: authService.confirmUser,
    onSuccess: data => {
      toast.success('Success')
    },
    onError: error => {
      const apiError = getApiError(error)
      toast.error(apiError.message)
    },
  })
}

export const useEmployeeLogin = () => {
  return useMutation({
    mutationFn: authService.employeeLogin,
    onSuccess: data => {
      console.log(data)
      toast.success('Success')
    },
    onError: error => {
      const apiError = getApiError(error)
      toast.error(apiError.message)
    },
  })
}

export const useStudentLogin = () => {
  return useMutation({
    mutationFn: authService.studentLogin,
    onSuccess: data => {
      console.log(data)
      toast.success('Success')
    },
    onError: error => {
      const apiError = getApiError(error)
      toast.error(apiError.message)
    },
  })
}

export const useGetMe = () => {
  const hasToken =
    typeof window !== 'undefined' && localStorage.getItem('token')

  return useQuery({
    queryKey: ['me'],
    queryFn: authService.getMe,
    enabled: !!hasToken,
  })
}
