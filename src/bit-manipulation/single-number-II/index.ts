export function singleNumber(nums: number[]): number {
  let ones = 0;
  let twos = 0;

  for (const num of nums) {
    // Adds the current "num" to "twos" if those bits are already in "ones".
    // This means the bits have now appeared twice.
    twos |= ones & num;

    // Toggles the bits in "ones" based on the current "num".
    ones ^= num;

    // Creates a mask where bits that are in both "ones" and "twos" are cleared (set to 0).
    // This is because these bits have appeared three times now.
    const common_mask = ~(ones & twos);

    // Apply the mask to clear the bits from "ones" and "twos" that have appeared three times.
    ones &= common_mask;
    twos &= common_mask;
  }

  return ones;
}
