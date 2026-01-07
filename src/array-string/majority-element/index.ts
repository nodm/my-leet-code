export function majorityElement(nums: number[]): number {
  const majorityThreshold = Math.ceil(nums.length / 2);

  let i = 0;
  const numCount = new Map<number, number>();
  while (i < nums.length) {
    const num = nums[i];
    numCount.set(num, (numCount.get(num) || 0) + 1);

    if (numCount.get(num)! >= majorityThreshold) {
      return num;
    }

    i += 1;
  }

  const [num] = Array.from(numCount.entries()).reduce((acc, [num, count]) => {
    if (count > acc[1]) {
      acc = [num, count];
    }

    return acc;
  });

  return num;
}

/**
 * Boyer-Moore Voting Algorithm
 */
function majorityElementBoyerMoore(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
}

export default majorityElementBoyerMoore;
