import {twoSum} from './index';

describe('Two Sum', () => {
  test('should return [0, 1] for nums = [2, 7, 11, 15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('should return [1, 2] for nums = [3, 2, 4], target = 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('should return [0, 3] for nums = [0, 4, 3, 0], target = 0', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  test('should return [2, 4] for nums = [-1, -2, -3, -4, -5], target = -89', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});
