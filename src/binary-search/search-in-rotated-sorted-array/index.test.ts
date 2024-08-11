import {search} from '.';

describe('search', () => {
  it('should return -1 if the array is empty', () => {
    const nums: number[] = [];
    const target = 5;
    const result = search(nums, target);
    expect(result).toEqual(-1);
  });

  it('should return -1 if the target is not found', () => {
    const nums: number[] = [1, 2, 3, 4, 5];
    const target = 6;
    const result = search(nums, target);
    expect(result).toEqual(-1);
  });

  it('should return the index of the target if it is found', () => {
    const nums: number[] = [4, 5, 6, 7, 0, 1, 2];
    const target = 0;
    const result = search(nums, target);
    expect(result).toEqual(4);
  });
});
