import isPowerOfThree from '.';

describe('Testing "isPowerOfThree"', () => {
  test.each([
    [0, false],
    [1, true],
    [2, false],
    [3, true],
    [9, true],
    [27, true],
    [45, false],
  ])('isPowerOfThree(%i) should return %s', (n, expected) => {
    expect(isPowerOfThree(n)).toStrictEqual(expected);
  });
});
