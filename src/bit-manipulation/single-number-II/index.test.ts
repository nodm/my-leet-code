import {singleNumber} from '.';

describe('singleNumber', () => {
  it('should return the single number in the array', () => {
    const nums = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
    const result = singleNumber(nums);
    expect(result).toEqual(1);
  });

  it('should return the single number in the array when the single number is negative', () => {
    const nums = [-2, -1, -2, -3, -4, -2, -3, -3, -4, -4];
    const result = singleNumber(nums);
    expect(result).toEqual(-1);
  });

  it('should return the single number in the array when the single number is zero', () => {
    const nums = [0, 0, 0, 1, 1, 1, 2, 2, 2];
    const result = singleNumber(nums);
    expect(result).toEqual(0);
  });

  it('should return the single number in the array when the single number is a large positive number', () => {
    const nums = [
      1000000, 1000000, 1000000, 2000000, 2000000, 2000000, 3000000, 3000000,
      3000000, 4000000,
    ];
    const result = singleNumber(nums);
    expect(result).toEqual(4000000);
  });

  it('should return the single number in the array when the single number is a large negative number', () => {
    const nums = [
      -1000000, -1000000, -1000000, -2000000, -2000000, -2000000, -3000000,
      -3000000, -3000000, -4000000,
    ];
    const result = singleNumber(nums);
    expect(result).toEqual(-4000000);
  });
});
