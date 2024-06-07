export function lengthOfLastWord(s: string): number {
  let i = s.length - 1;

  while (i >= 0 && s[i] === ' ') {
    i -= 1;
  }

  let n = 0;
  while (i >= 0 && s[i] !== ' ') {
    i -= 1;
    n += 1;
  }

  return n;
}
