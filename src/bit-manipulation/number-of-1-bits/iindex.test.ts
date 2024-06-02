import hammingWeight from '.';

describe('hammingWeight', () => {
  test.each([
    [0b1011, 3],
    [0b10000000, 1],
    [0b1111111111111111111111111111101, 30],
  ])('should be hammingWeight(%i) = %i', (n, expected) => {
    expect(hammingWeight(n)).toEqual(expected);
  });
});
