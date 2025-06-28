const engToMyanmarMap: Record<string, string> = {
  '0': '၀',
  '1': '၁',
  '2': '၂',
  '3': '၃',
  '4': '၄',
  '5': '၅',
  '6': '၆',
  '7': '၇',
  '8': '၈',
  '9': '၉',
}

export default function mapEnNumToMm(input: string): string {
  return input.replace(/[0-9]/g, digit => engToMyanmarMap[digit])
}
