import { z } from 'zod'

export const nrcSchema = z.object({
  stateCode: z.string().min(1),
  townshipCode: z.string().min(1),
  nrcType: z.string().min(1),
  nrcNumber: z
    .string()
    .trim()
    .regex(/^[၀၁၂၃၄၅၆၇၈၉]{6}$/),
})
