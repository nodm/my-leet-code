import rob from './index';

describe('Testing "rob"', () => {
  test.each([
    {amountOfMoney: [1, 2, 3, 1], result: 4},
    {amountOfMoney: [2, 7, 9, 3, 1], result: 12},
    {amountOfMoney: [1, 9, 5, 1, 5, 1], result: 14},
  ])(
    'for amount of money in each house $nums, it should return $result',
    ({amountOfMoney: nums, result}) => {
      expect(rob(nums)).toEqual(result);
    },
  );
});
