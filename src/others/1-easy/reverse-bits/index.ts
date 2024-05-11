function reverseBits(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result <<= 1; // Left shift result to make space for the next bit
    result |= n & 1; // Get the least significant bit of n and set it in result
    n >>= 1; // Right shift n to get the next bit
  }

  return result >>> 0; // Convert result to unsigned integer
}

export default reverseBits;
