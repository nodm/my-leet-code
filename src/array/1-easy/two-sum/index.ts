export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  const length = nums.length;

  for (let i = 0; i < length; i += 1) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    numMap.set(nums[i], i);
  }

  // No solution found
  return [];
}

export function twoSumBrute(nums: number[], target: number): number[] {
  const length = nums.length;
  const iLimit = length - 1;
  let i = 0;
  let j;
  let solution;

  while (!solution && i < iLimit) {
    const firstNumber = nums[i];
    j = i + 1;

    while (!solution && j < length) {
      if (firstNumber + nums[j] === target) {
        solution = [i, j];
      }

      j += 1;
    }

    i += 1;
  }

  return solution!;
}
