type RomanNumberCharacter = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

const alphabetMap = new Map<RomanNumberCharacter, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

function romanToInt(s: string): number {
  let n = 0;
  let i = s.length - 1;
  let previousValue = 0;

  while (i >= 0) {
    const currentValue = alphabetMap.get(
      s.charAt(i) as RomanNumberCharacter
    ) as number;

    if (currentValue < previousValue) {
      n -= currentValue;
    } else {
      n += currentValue;
    }

    i -= 1;
    previousValue = currentValue;
  }

  return n;
}

export default romanToInt;
