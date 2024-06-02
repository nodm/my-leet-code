/**
 Do not return anything, modify nums in-place instead.
 */
export function _rotate(nums: number[], k: number): void {
  const length = nums.length;
  const numberOfMoves = k % length;

  let count = 0;

  for (let start = 0; count < length; start += 1) {
    let current = start;
    let previous = nums[start];

    do {
      const next = (current + numberOfMoves) % length;
      const temp = nums[next];
      nums[next] = previous;
      previous = temp;
      current = next;
      count += 1;
    } while (start !== current);
  }
}

function reverse(nums: number[], startIndex = 0, endIndex = nums.length - 1) {
  let i = startIndex;
  let j = endIndex;

  while (i < j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i += 1;
    j -= 1;
  }
}

export default function rotate(nums: number[], k: number): void {
  const length = nums.length;
  const steps = k % length;

  if (steps === 0) return;

  reverse(nums);
  reverse(nums, 0, steps - 1);
  reverse(nums, steps);
}
