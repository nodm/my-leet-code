export function search(nums: number[], target: number): number {
  if (!nums.length) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >>> 1;

    if (nums[mid] === target) return mid;

    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      // Check if the target is in the left side
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Otherwise, the right side is sorted
      // Check if the target is in the right side
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
