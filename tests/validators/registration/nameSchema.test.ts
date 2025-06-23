import { nameSchema } from '@/validators/registration/nameSchema'

describe('nameSchema validation', () => {
  it('testValidName', () => {
    const validData = {
      mm: 'မောင်မောင်',
      en: 'mg mg',
    }
    expect(nameSchema.safeParse(validData).success).toBe(true)
  })
  it('testValidName', () => {
    const validData = {
      mm: '   မောင်မောင်   ',
      en: '   mg mg   ',
    }
    expect(nameSchema.safeParse(validData).success).toBe(true)
  })
  it('testInvalidName', () => {
    const invalidData = {
      mm: 'mg mg',
      en: 'mg mg',
    }
    expect(nameSchema.safeParse(invalidData).success).toBe(false)
  })
  it('testInvalidName', () => {
    const invalidData = {
      mm: 'မောင်မောင်',
      en: 'မောင်မောင်',
    }
    expect(nameSchema.safeParse(invalidData).success).toBe(false)
  })
  it('testInvalidName', () => {
    const invalidData = {
      mm: 'မောင် Mg',
      en: 'မောင် Mg',
    }
    expect(nameSchema.safeParse(invalidData).success).toBe(false)
  })
})
