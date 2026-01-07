export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      return [left + 1, right + 1];
    } else if (currentSum < target) {
      // Need a larger sum, move the left pointer right
      left += 1;
    } else {
      // Need a smaller sum, move the right pointer left
      right -= 1;
    }
  }

  // Per constraints, exactly one solution exists,
  // so we don't need to handle the "no solution" case.
  return [];
}
