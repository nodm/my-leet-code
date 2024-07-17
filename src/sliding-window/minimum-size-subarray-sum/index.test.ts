import {minSubArrayLen, minSubArrayLen1} from './index';

describe('minSubArrayLen', () => {
  test.each([
    [7, [2, 3, 1, 2, 4, 3], 2],
    [4, [1, 4, 4], 1],
    [11, [1, 1, 1, 1, 1, 1, 1, 1], 0],
    [10, [5, 5, 5, 5, 5], 2],
    [15, [1, 2, 3, 4, 5], 5],
    [100, [1, 2, 3, 4, 5], 0],
  ])('minSubArrayLen(%i, %p) should return %i', (target, nums, expected) => {
    expect(minSubArrayLen(target, nums)).toBe(expected);
  });
});

describe('minSubArrayLen1', () => {
  test.each([
    [7, [2, 3, 1, 2, 4, 3], 2],
    [4, [1, 4, 4], 1],
    [11, [1, 1, 1, 1, 1, 1, 1, 1], 0],
    [10, [5, 5, 5, 5, 5], 2],
    [15, [1, 2, 3, 4, 5], 5],
    [100, [1, 2, 3, 4, 5], 0],
  ])('minSubArrayLen(%i, %p) should return %i', (target, nums, expected) => {
    expect(minSubArrayLen1(target, nums)).toBe(expected);
  });
});
