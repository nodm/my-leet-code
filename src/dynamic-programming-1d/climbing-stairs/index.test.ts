import climbStairs from './index';

describe('Testing "climbStairs"', () => {
  test.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8],
    [6, 13],
  ])('for n=%n should equal to %n', (n, expected) => {
    expect(climbStairs(n)).toBe(expected);
  });
});
