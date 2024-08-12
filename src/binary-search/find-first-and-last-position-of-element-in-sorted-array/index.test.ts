import {searchRange} from '.';

describe('searchRange', () => {
  it('should return [-1, -1] if the array is empty', () => {
    const nums: number[] = [];
    const target = 5;
    const result = searchRange(nums, target);
    expect(result).toEqual([-1, -1]);
  });

  it('should return [-1, -1] if the target is not found in the array', () => {
    const nums: number[] = [1, 2, 3, 4, 6, 7, 8];
    const target = 5;
    const result = searchRange(nums, target);
    expect(result).toEqual([-1, -1]);
  });

  it('should return the range of indices if the target is found in the array', () => {
    const nums: number[] = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8];
    const target = 4;
    const result = searchRange(nums, target);
    expect(result).toEqual([3, 5]);
  });

  it('should return the range of indices if the target is found multiple times in the array', () => {
    const nums: number[] = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8];
    const target = 5;
    const result = searchRange(nums, target);
    expect(result).toEqual([6, 6]);
  });
});
