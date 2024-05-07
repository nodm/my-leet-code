function isPowerOfThree(n: number): boolean {
  // Check if n is positive or zero
  if (n <= 0) return false;

  if (n % 2 === 0) return false;

  // Calculate the logarithm of the absolute value of n base 3
  const log3 = Math.log10(n) / Math.log10(3);

  // Check if the result is an integer
  return Number.isInteger(log3);
}

export default isPowerOfThree;
