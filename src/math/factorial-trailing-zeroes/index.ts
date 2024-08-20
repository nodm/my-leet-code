/**
 * To find the number of trailing zeroes in the factorial of a given number n, we need to count
 * the number of times the factor 10 appears in n!. Since 10 is the product of 2 and 5, and there
 * are always more factors of 2 than 5 in any factorial, the number of trailing zeroes is
 * determined by the number of times 5 is a factor in the numbers from 1 to n.
 *
 * Key Insight:
 * Each multiple of 5 contributes at least one 5 as a factor.
 * Multiples of 25 contribute an extra 5 (since 25 = 5 * 5).
 * Multiples of 125 contribute yet another extra 5, and so on.
 * Approach:
 * To count the number of trailing zeroes in n!, we can sum up the number of times 5 is a factor in all numbers from 1 to n by:
 *
 * Counting how many multiples of 5 are there in n (n // 5).
 * Counting how many multiples of 25 are there in n (n // 25).
 * Counting how many multiples of 125 are there in n (n // 125), and so on.
 * The total count gives us the number of trailing zeroes.
 */

export function trailingZeroes(n: number): number {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}
