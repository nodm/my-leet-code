import maxProfit from './index';

describe('Testing "maxProfit"', () => {
  test.each([
    {prices: [7, 1, 5, 3, 6, 4], expected: 5},
    {prices: [7, 6, 4, 3, 1], expected: 0},
  ])(
    'should return $expected for prices $prices',
    ({prices, expected}: {prices: number[]; expected: number}) => {
      expect(maxProfit(prices)).toBe(expected);
    }
  );
});
