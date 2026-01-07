export function missingNumber(nums: number[]): number {
  const num = [...nums]
    .sort((a, b) => a - b)
    .findIndex((num, index) => num !== index);

  return num === -1 ? nums.length : num;
}

/**
 * Gauss' Formula. This formula states that the sum of the first n natural numbers is (n * (n + 1)) / 2.
 */
function missingNumberGauss(nums: number[]): number {
  return (
    (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, num) => acc + num)
  );
}

export default missingNumberGauss;
