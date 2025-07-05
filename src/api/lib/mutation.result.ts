import { toast } from 'sonner'
import { getApiError } from './axios'

export const mutationResult = {
  onSuccess: () => {
    toast.success('Success')
  },
  onError: (error: Error) => {
    const apiError = getApiError(error)
    if (apiError.data instanceof Array && apiError.data.length > 0) {
      toast.error(apiError.data[0].message)
    } else {
      toast.error(apiError.message)
    }
  },
}
