import hammingDistance from '.';

describe('Testing "hammingDistance"', () => {
  test.each([
    [1, 4, 2],
    [3, 1, 1],
    [93, 73, 2],
    [0, 0, 0],
    [0, 1, 1],
    [1, 0, 1],
    [0, 4, 1],
    [4, 0, 1],
    [4, 4, 0],
  ])('hammingDistance(%i, %i) should return %i', (x, y, expected) => {
    expect(hammingDistance(x, y)).toBe(expected);
  });
});
