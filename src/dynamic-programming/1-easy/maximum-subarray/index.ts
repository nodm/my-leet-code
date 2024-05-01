function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0; // Edge case: empty array

  let maxSum = nums[0]; // Initialize maxSum with the first element of the array
  let currentSum = nums[0]; // Initialize currentSum with the first element of the array

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Calculate the current sum by adding the current element to the previous sum
    // If the current element itself is greater than the previous sum, start a new subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum; // Return the maximum sum found
}

export default maxSubArray;
