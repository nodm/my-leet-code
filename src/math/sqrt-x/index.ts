export function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }

  let left = 1;
  let right = x;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
}
