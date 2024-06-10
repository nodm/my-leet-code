export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let writeIndex = 2;

  for (let i = writeIndex; i < nums.length; i++) {
    if (nums[i] !== nums[writeIndex - 2]) {
      nums[writeIndex] = nums[i];
      writeIndex += 1;
    }
  }

  return writeIndex;
}
