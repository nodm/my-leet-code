import {twoSum} from './index';

describe('twoSum', () => {
  test.each([
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
  ])('twoSum(%j, %i) should return %j', (numbers, target, expected) => {
    expect(twoSum(numbers, target)).toEqual(expected);
  });
});
