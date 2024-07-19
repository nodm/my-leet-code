export function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  const map = new Map<number, number>();
  let maxLength = 0;

  for (const num of nums) {
    if (!map.has(num)) {
      const left = map.get(num - 1) ?? 0;
      const right = map.get(num + 1) ?? 0;
      const length = left + right + 1;

      map.set(num, length);
      if (left) map.set(num - left, length);
      if (right) map.set(num + right, length);

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}
