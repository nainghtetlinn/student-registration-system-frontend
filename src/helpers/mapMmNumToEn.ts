const myanmarToEngMap: Record<string, string> = {
  '၀': '0',
  '၁': '1',
  '၂': '2',
  '၃': '3',
  '၄': '4',
  '၅': '5',
  '၆': '6',
  '၇': '7',
  '၈': '8',
  '၉': '9',
}

export default function mapMmNumToEn(input: string): string {
  return input.replace(/[၀-၉]/g, digit => myanmarToEngMap[digit])
}
