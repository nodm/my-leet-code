import {isPalindrome} from './index';

describe('isPalindrome', () => {
  test.each([
    [121, true],
    [-121, false],
    [10, false],
    [-101, false],
  ])('isPalindrome(%i) should return %p', (x, expected) => {
    expect(isPalindrome(x)).toEqual(expected);
  });
});
