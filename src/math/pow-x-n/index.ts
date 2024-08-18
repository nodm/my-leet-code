export function myPow(x: number, n: number): number {
  if (n === 0) return 1;

  // Handle negative exponent
  let exponent = n;
  if (exponent < 0) {
    x = 1 / x;
    exponent = -exponent;
  }

  let result = 1;
  let currentProduct = x;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= currentProduct;
    }
    currentProduct *= currentProduct;
    exponent = Math.floor(exponent / 2);
  }

  return result;
}
