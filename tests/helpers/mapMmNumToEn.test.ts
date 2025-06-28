import mapMmNumToEn from '@/helpers/mapMmNumToEn'

describe('mapMmNumToEn', () => {
  it('testThatConvertingToMmToBeSuccess', () => {
    expect(mapMmNumToEn('၁၂၃၄၅၆၇၈') === '12345678').toBe(true)
  })
  it('testThatConvertingToMmToBeSuccess', () => {
    expect(mapMmNumToEn('1122၃၃၄၄') === '11223344').toBe(true)
  })
  it('testThatConvertingToMmToBeFailed', () => {
    expect(mapMmNumToEn('၈၇၆၅၄၃၂၁') === '12345678').toBe(false)
  })
})
