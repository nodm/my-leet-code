import {jump} from './index';
describe('jump', () => {
  test.each([
    [[2, 3, 1, 1, 4], 2],
    [[2, 3, 0, 1, 4], 2],
    [[0], 0],
    [[1, 2, 3], 2],
    [[1, 1, 1, 1], 3],
  ])(
    'should return the minimum number of jumps needed to reach the last index for the array %s',
    (nums, expected) => {
      expect(jump(nums)).toBe(expected);
    },
  );
});
