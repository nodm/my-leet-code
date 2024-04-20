export function myAtoi(s: string): number {
  let sign: -1 | 1 = 1;
  let i = 0;
  let value = '';

  while (i < s.length && s[i] === ' ') {
    i += 1;
  }

  if (['+', '-'].includes(s[i])) {
    if (s[i] === '-') {
      sign = -1;
    }

    i += 1;
  }

  while (i < s.length && /\d/.test(s[i])) {
    value += s[i];
    i += 1;
  }

  if (!value) return 0;

  const limitation = 2 ** 31 - (sign === -1 ? 0 : 1);
  if (Number(value) > limitation) return sign * limitation;

  return sign * Number(value);
}
