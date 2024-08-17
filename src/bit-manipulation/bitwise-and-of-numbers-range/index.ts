export function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;

  // Find the common prefix by shifting left and right to the right
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }

  // Shift the common prefix back to the left by the number of shifts
  return left << shift;
}
