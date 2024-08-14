export function addBinary(a: string, b: string): string {
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const digitB = j >= 0 ? parseInt(b[j], 10) : 0;
    const sum = digitA + digitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i -= 1;
    j -= 1;
  }

  return result;
}
