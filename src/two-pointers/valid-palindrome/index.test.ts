import isPalindrome from './index';

describe('isPalindrome', () => {
  test.each([
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
    [' ', true],
    ['a', true],
    ['aba', true],
  ])('the string "%s" is palindrome %s', (s, expected) => {
    expect(isPalindrome(s)).toBe(expected);
  });
});
