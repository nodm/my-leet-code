import countPrimes from '.';

describe('Testing "countPrimes"', () => {
  test.each([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 1],
    [10, 4],
  ])('countPrimes(%i) should return %i', (n, expected) => {
    expect(countPrimes(n)).toStrictEqual(expected);
  });
});
