export function productExceptSelf(nums: number[]): number[] {
  const res: number[] = [];
  res[0] = 1;

  for (let i = 1; i < nums.length; i += 1) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
}
