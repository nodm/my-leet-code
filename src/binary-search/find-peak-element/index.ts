/**
 * Time Complexity: O(log n) because we halve the search space in each step.
 * Space Complexity: O(1) because we are using a constant amount of extra space.
 */
export function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // Peak is in the left half (including mid)
      right = mid;
    } else {
      // Peak is in the right half (excluding mid)
      left = mid + 1;
    }
  }

  return left;
}
