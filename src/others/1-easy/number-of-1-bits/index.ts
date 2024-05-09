function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    count += n & 1; // Check if the least significant bit is 1
    n >>>= 1; // Shift right to check the next bit
  }

  return count;
}

export default hammingWeight;
