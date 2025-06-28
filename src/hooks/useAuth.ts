import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { getApiError } from '@/lib/utils'
import { authService } from '@/services/auth.service'

export const useCheckUser = () => {
  return useMutation({
    mutationFn: authService.checkUser,
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
