import {canJump} from './index';

describe('Jump Game', () => {
  test.each([
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
    [[0], true],
    [[1, 1, 1, 0], true],
    [[1, 1, 0, 1], false],
  ])('Test case %#: canJump(%p) should return %p', (nums, expected) => {
    expect(canJump(nums)).toBe(expected);
  });
});
