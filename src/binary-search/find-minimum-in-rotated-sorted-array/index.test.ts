import {findMin} from '.';

describe('findMin', () => {
  test.each([
    [0, [4, 5, 6, 7, 0, 1, 2]],
    [1, [3, 4, 5, 1, 2]],
    [11, [11, 13, 15, 17]],
  ])('should return %i for the rotated array %o', (expectedMin, nums) => {
    expect(findMin(nums)).toEqual(expectedMin);
  });
});
