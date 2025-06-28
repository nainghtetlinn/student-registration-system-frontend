import { nrcStates, nrcTownships, nrcTypes } from '@/assets/NRC_Data.min.json'
import { TNrcSchema } from '@/validators/registration/nrcSchema'
import mapMmNumToEn from './mapMmNumToEn'
import mapEnNumToMm from './mapEnNumToMm'

export default function mapNrcObjectToString(
  nrc: TNrcSchema,
  language: 'en' | 'mm' = 'mm'
): string {
  const stateCode = nrcStates.find(d => d.id === nrc.stateCode)
  const townshipCode = nrcTownships.find(d => d.id === nrc.townshipCode)
  const nrcType = nrcTypes.find(d => d.id === nrc.nrcType)

  if (language === 'en') {
    return `${stateCode?.number.en}/${townshipCode?.short.en}(${
      nrcType?.name.en
    })${mapMmNumToEn(nrc.nrcNumber)}`
  } else {
    return `${stateCode?.number.mm}/${townshipCode?.short.mm}(${
      nrcType?.name.mm
    })${mapEnNumToMm(nrc.nrcNumber)}`
  }
}
