import { rollNoSchema } from '@/validators/registration/rollNoSchema'

describe('rollNoSchema validation', () => {
  it('testValidRollNo', () => {
    const validData = {
      year: '1',
      major: 'IT',
      no: '1',
    }
    expect(rollNoSchema.safeParse(validData).success).toBe(true)
  })
  it('testValidRollNo', () => {
    const validData = {
      year: '  1  ',
      major: 'IT',
      no: '1',
    }
    expect(rollNoSchema.safeParse(validData).success).toBe(true)
  })
  it('testValidRollNo', () => {
    const validData = {
      year: 1,
      major: 'IT',
      no: 1,
    }
    expect(rollNoSchema.safeParse(validData).success).toBe(true)
  })
  it('testInvalidRollNo', () => {
    const invalidData = {
      year: '7',
      major: 'IT',
      no: '1',
    }
    expect(rollNoSchema.safeParse(invalidData).success).toBe(false)
  })
  it('testInvalidRollNo', () => {
    const invalidData = {
      year: '1',
      major: 'EE',
      no: '1',
    }
    expect(rollNoSchema.safeParse(invalidData).success).toBe(false)
  })
})
