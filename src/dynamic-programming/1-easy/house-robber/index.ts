function rob(nums: number[]): number {
  if (nums.length === 0) return 0; // Base case: if there are no houses, return 0
  if (nums.length === 1) return nums[0]; // Base case: if there's only one house, rob it

  // Create an array to store the maximum amount of money robbed up to each house
  const dp: number[] = [];
  dp[0] = nums[0]; // Base case: amount of money robbed from the first house
  dp[1] = Math.max(nums[0], nums[1]); // Maximum amount of money robbed from the first two houses

  // Iterate through the remaining houses
  for (let i = 2; i < nums.length; i++) {
    // The maximum amount of money robbed up to the current house is the maximum of:
    // 1. The amount of money robbed from the current house plus the amount of money robbed up to two houses ago
    // 2. The amount of money robbed up to the previous house
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  // The maximum amount of money robbed is the last element in the dp array
  return dp[nums.length - 1];
}

export default rob;
