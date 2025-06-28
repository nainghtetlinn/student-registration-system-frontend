import mapEnNumToMm from '@/helpers/mapEnNumToMm'

describe('mapEnNumToMm', () => {
  it('testThatConvertingToMmToBeSuccess', () => {
    expect(mapEnNumToMm('12345678') === '၁၂၃၄၅၆၇၈').toBe(true)
  })
  it('testThatConvertingToMmToBeSuccess', () => {
    expect(mapEnNumToMm('1122၃၃၄၄') === '၁၁၂၂၃၃၄၄').toBe(true)
  })
  it('testThatConvertingToMmToBeFailed', () => {
    expect(mapEnNumToMm('12345678') === '၈၇၆၅၄၃၂၁').toBe(false)
  })
})
