import {threeSum} from './index';
describe('threeSum', () => {
  test.each([
    [
      [-1, 0, 1, 2, -1, -4],
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    ],
    [[1, -1, -1, 0], [[-1, 0, 1]]],
    [[], []],
    [[0, 1, 1], []],
    [[0, 0, 0], [[0, 0, 0]]],
    [[1, 2, 3, 4, 5], []],
  ])('threeSum(%j) should return %j', (nums, expected) => {
    expect(threeSum(nums)).toEqual(expected);
  });
});
