import maxProfit from './index';

describe('maxProfit', () => {
  test.each([
    [[7, 1, 5, 3, 6, 4], 7],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
  ])('maxProfit(%p) should return %p', (prices, expected) => {
    expect(maxProfit(prices)).toBe(expected);
  });
});
