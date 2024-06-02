import isSubsequence from './index';

describe('isSubsequence', () => {
  test.each([
    ['abc', 'ahbgdc', true],
    ['axc', 'ahbgdc', false],
    ['', 'ahbgdc', true],
    ['abc', '', false],
    ['', '', true],
    ['abc', 'abc', true],
    ['abc', 'acb', false],
    ['abc', 'ab', false],
    ['ab', 'abc', true],
  ])('%isSubsequence(%s, %s) should return %s', (s, t, expected) => {
    expect(isSubsequence(s, t)).toBe(expected);
  });
});
