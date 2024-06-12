import {searchInsert} from './index';

describe('searchInsert', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], 8, 7],
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0],
    [[1], 0, 0],
    [[1], 1, 0],
    [[1], 2, 1],
    [[1], 3, 1],
  ])('searchInsert(%s, %i) should return %i', (nums, target, expected) => {
    expect(searchInsert(nums, target)).toBe(expected);
  });
});
