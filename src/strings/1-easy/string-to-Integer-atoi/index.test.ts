import {myAtoi} from './index';

describe('Testing String to Integer (atoi)', () => {
  it('should return 42', () => {
    expect(myAtoi('42')).toBe(42);
  });

  it('should return -42', () => {
    expect(myAtoi('   -42')).toBe(-42);
  });

  it('should return 32', () => {
    expect(myAtoi('   0032')).toBe(32);
  });

  it('should return 4193', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  });

  it('should return 0', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });

  it('should return -2147483648', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648);
  });

  it('should return 0', () => {
    expect(myAtoi('+-12')).toBe(0);
  });

  it('should return 0', () => {
    expect(myAtoi('00000  -42')).toBe(0);
  });

  it('should return 0', () => {
    expect(myAtoi('00000-42')).toBe(0);
  });
});
