import {rangeBitwiseAnd} from '.';

describe('rangeBitwiseAnd', () => {
  it('should return 0 if left and right are 0', () => {
    const result = rangeBitwiseAnd(0, 0);
    expect(result).toBe(0);
  });

  it('should return the same number if left and right are equal', () => {
    const result = rangeBitwiseAnd(5, 5);
    expect(result).toBe(5);
  });

  it('should return the bitwise AND of the range [5, 7]', () => {
    const result = rangeBitwiseAnd(5, 7);
    expect(result).toBe(4);
  });

  it('should return the bitwise AND of the range [10, 15]', () => {
    const result = rangeBitwiseAnd(10, 15);
    expect(result).toBe(8);
  });
});
