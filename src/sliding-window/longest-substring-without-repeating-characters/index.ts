export function lengthOfLongestSubstring(s: string): number {
  const n = s.length;

  if (n === 0) return 0;

  const charIndexMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
    const currentChar = s[right];

    if (charIndexMap.has(currentChar)) {
      left = Math.max(charIndexMap.get(currentChar)! + 1, left);
    }

    charIndexMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}
