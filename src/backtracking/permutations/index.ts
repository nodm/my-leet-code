/**
 * The time complexity is O(n * n!), where n is the length of the array.
 * This accounts for generating each of the n! permutations and the time
 * to copy each permutation into the result list.
 */
export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtrack = (start: number) => {
    if (start === nums.length) {
      result.push([...nums]); // Push a copy of the current permutation
      return;
    }

    for (let i = start; i < nums.length; i += 1) {
      // Swap the current element with the start element
      [nums[start], nums[i]] = [nums[i], nums[start]];

      // Recursively generate permutations for the next index
      backtrack(start + 1);

      // Backtrack: undo the swap
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  };

  backtrack(0);

  return result;
}
