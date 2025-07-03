import { useMutation, useQuery } from '@tanstack/react-query'

import { mutationResult } from '@/lib/mutation.result'
import { authService } from '@/services/auth.service'

export const useRegister = () => {
  return useMutation({
    mutationFn: authService.register,
    onSuccess: mutationResult.onSuccess,
    onError: mutationResult.onError,
  })
}

export const useCheckUser = () => {
  return useMutation({
    mutationFn: authService.checkUser,
    onSuccess: mutationResult.onSuccess,
    onError: mutationResult.onError,
  })
}

export const useConfirmUser = () => {
  return useMutation({
    mutationFn: authService.confirmUser,
    onSuccess: mutationResult.onSuccess,
    onError: mutationResult.onError,
  })
}

export const useEmployeeLogin = () => {
  return useMutation({
    mutationFn: authService.employeeLogin,
    onSuccess: mutationResult.onSuccess,
    onError: mutationResult.onError,
  })
}

export const useStudentLogin = () => {
  return useMutation({
    mutationFn: authService.studentLogin,
    onSuccess: mutationResult.onSuccess,
    onError: mutationResult.onError,
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
