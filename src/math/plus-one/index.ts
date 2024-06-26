function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;

  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;

    i -= 1;
  }

  digits.unshift(1);

  return digits;
}

export default plusOne;
