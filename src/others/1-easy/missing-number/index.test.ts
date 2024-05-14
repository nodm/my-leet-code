import missingNumber from './index';

describe('missingNumber', () => {
  test.each([
    [[3, 0, 1], 2],
    [[0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
    [[0], 1],
    [[1], 0],
    [[1, 2, 3], 0],
  ])('missingNumber(%p) should return %p', (nums, expected) => {
    expect(missingNumber(nums)).toBe(expected);
  });
});
