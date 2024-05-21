const MAX_INTEGER_STR = '2147483647'; //2 ** 31 - 1
const MIN_INTEGER_STR_ABS = '2147483648'; // -(2 ** 31);

function reverse(x: number): number {
  let reversedStr = Math.abs(x).toString().split('').reverse().join('');
  if (reversedStr.length > 1 && reversedStr.charAt(0) === '0')
    reversedStr = reversedStr.slice(1);

  if (
    reversedStr.padStart(MAX_INTEGER_STR.length, '0') >
    (x < 0 ? MIN_INTEGER_STR_ABS : MAX_INTEGER_STR)
  )
    return 0;

  const reversed = parseInt(reversedStr, 10);

  return x < 0 ? -reversed : reversed;
}

export default reverse;
