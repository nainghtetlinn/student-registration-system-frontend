import { TRollNoSchema } from '@/validators/registration/rollNoSchema'

export default function mapRollNoObjectToString(rollNo: TRollNoSchema): string {
  return `${rollNo.year}${rollNo.major}-${rollNo.no}`
}
