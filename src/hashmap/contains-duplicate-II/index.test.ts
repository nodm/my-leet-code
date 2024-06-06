import {containsNearbyDuplicate} from './index';

describe('containsNearbyDuplicate', () => {
  test.each([
    [[1, 2, 3, 1], 3, true],
    [[1, 0, 1, 1], 1, true],
    [[1, 2, 3, 1, 2, 3], 2, false],
  ])('containsNearbyDuplicate(%s) should return %s', (nums, k, expected) => {
    expect(containsNearbyDuplicate(nums, k)).toBe(expected);
  });
});
