/*
  Time complexity: O(n)
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Number.POSITIVE_INFINITY;

  while (right < nums.length) {
    sum += nums[right];
    right += 1;

    while (sum >= target) {
      minLength = Math.min(minLength, right - left);
      sum -= nums[left];
      left += 1;
    }
  }

  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
}

/*
  Time complexity: O(n * log n)
 */
export function minSubArrayLen1(target: number, nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;

  // Compute prefix sums
  const prefixSums: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i += 1) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  // Initialize the minimum length to Infinity
  let minLength = Number.POSITIVE_INFINITY;

  // Helper function to perform binary search
  function binarySearch(left: number, right: number, target: number): number {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (prefixSums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  // For each index, find the smallest subarray sum >= target
  for (let i = 0; i < n; i += 1) {
    const requiredSum = prefixSums[i] + target;
    const bound = binarySearch(i + 1, n + 1, requiredSum);
    if (bound <= n) {
      minLength = Math.min(minLength, bound - i);
    }
  }

  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
}
