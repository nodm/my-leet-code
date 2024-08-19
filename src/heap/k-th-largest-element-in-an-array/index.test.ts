import {findKthLargest} from '.';

describe('findKthLargest', () => {
  it('should return the kth largest element in the array', () => {
    const nums: number[] = [3, 2, 1, 5, 6, 4];
    const k = 2;
    const result = findKthLargest(nums, k);
    expect(result).toEqual(5);
  });

  it('should return the kth largest element when k is equal to the array length', () => {
    const nums: number[] = [3, 2, 1, 5, 6, 4];
    const k: number = nums.length;
    const result = findKthLargest(nums, k);
    expect(result).toEqual(1);
  });

  it('should return the kth largest element when k is 1', () => {
    const nums: number[] = [3, 2, 1, 5, 6, 4];
    const k = 1;
    const result = findKthLargest(nums, k);
    expect(result).toEqual(6);
  });

  it('should return the kth largest element when the array contains negative numbers', () => {
    const nums: number[] = [-1, -2, -3, -4, -5];
    const k = 2;
    const result = findKthLargest(nums, k);
    expect(result).toEqual(-2);
  });

  it('should return the kth largest element when the array contains duplicate numbers', () => {
    const nums: number[] = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = findKthLargest(nums, k);
    expect(result).toEqual(2);
  });
});
