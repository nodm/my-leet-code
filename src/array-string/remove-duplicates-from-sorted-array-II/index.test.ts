import {removeDuplicates} from './index';

describe('removeDuplicates', () => {
  test.each([
    [[1, 1, 1, 2, 2, 3], 5, [1, 1, 2, 2, 3]],
    [[0, 0, 1, 1, 1, 1, 2, 3, 3], 7, [0, 0, 1, 1, 2, 3, 3]],
    [[1, 2, 3], 3, [1, 2, 3]],
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2, [1, 1]],
  ])(
    'should remove duplicates from sorted array %p and return %p',
    (nums, expectedNumber, expected) => {
      const k = removeDuplicates(nums);
      expect(k).toEqual(expectedNumber);
      expect(nums.slice(0, k)).toEqual(expected);
    },
  );
});
