import {trailingZeroes} from '.';

describe('trailingZeroes', () => {
  it('should return 0 if n is less than 5', () => {
    const n = 4;
    const result = trailingZeroes(n);
    expect(result).toBe(0);
  });

  it('should return the correct number of trailing zeroes for n = 5', () => {
    const n = 5;
    const result = trailingZeroes(n);
    expect(result).toBe(1);
  });

  it('should return the correct number of trailing zeroes for n = 10', () => {
    const n = 10;
    const result = trailingZeroes(n);
    expect(result).toBe(2);
  });

  it('should return the correct number of trailing zeroes for n = 25', () => {
    const n = 25;
    const result = trailingZeroes(n);
    expect(result).toBe(6);
  });

  it('should return the correct number of trailing zeroes for n = 100', () => {
    const n = 100;
    const result = trailingZeroes(n);
    expect(result).toBe(24);
  });
});
