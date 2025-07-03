import { toast } from 'sonner'
import { getApiError } from './utils'

export const mutationResult = {
  onSuccess: () => {
    toast.success('Success')
  },
  onError: (error: Error) => {
    const apiError = getApiError(error)
    toast.error(apiError.message)
  },
}
