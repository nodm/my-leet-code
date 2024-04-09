// -100 <= nums[i] <= 100
// const MIN = -100;
const MAX = 100;

// nums is sorted in non-decreasing order.
export default function removeDuplicates(nums: number[]): number {
  // 1 <= nums.length <= 3 * 104
  let previous = nums[0];
  let i = 1;
  let j = 1;

  while (j < nums.length) {
    const current = nums[j];

    if (current !== previous) {
      previous = current;
      nums[i] = current;
      i += 1;

      if (current > MAX) break;
    }

    j += 1;
  }

  return i;
}
