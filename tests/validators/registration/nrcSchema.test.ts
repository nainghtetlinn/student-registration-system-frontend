import { nrcSchema } from '@/validators/registration/nrcSchema'

describe('nrcSchema validation', () => {
  it('testValidNrcObject', () => {
    const validData = {
      stateCode: '၁၃',
      townshipCode: 'တကန',
      nrcType: 'နိုင်',
      nrcNumber: '၁၂၃၄၅၆',
    }
    expect(nrcSchema.safeParse(validData).success).toBe(true)
  })
  it('testValidNrcObject', () => {
    const validData = {
      stateCode: '၁၃',
      townshipCode: 'တကန',
      nrcType: 'နိုင်',
      nrcNumber: '123456',
    }
    expect(nrcSchema.safeParse(validData).success).toBe(true)
  })
  it('testValidNrcObject', () => {
    const validData = {
      stateCode: '၁၃',
      townshipCode: 'တကန',
      nrcType: 'နိုင်',
      nrcNumber: '123၄၅၆',
    }
    expect(nrcSchema.safeParse(validData).success).toBe(true)
  })
  it('testInvalidNrcObject', () => {
    const invalidData = {
      stateCode: '၁၃',
      townshipCode: 'တကန',
      nrcType: 'နိုင်',
      nrcNumber: '၁၂၃၄၅',
    }
    expect(nrcSchema.safeParse(invalidData).success).toBe(false)
  })
  it('testInvalidNrcObject', () => {
    const invalidData = {
      stateCode: '၁၃',
      townshipCode: 'တကန',
      nrcType: 'နိုင်',
      nrcNumber: '12345',
    }
    expect(nrcSchema.safeParse(invalidData).success).toBe(false)
  })
})
