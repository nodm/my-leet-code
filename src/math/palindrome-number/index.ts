export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Check if the reversed half is equal to the remaining half
  // For odd length numbers, we need to remove the middle digit from reversedHalf
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
