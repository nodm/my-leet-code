import {strStr} from './index';

describe('Testing strStr', () => {
  it('should return 2', () => {
    expect(strStr('hello', 'll')).toBe(2);
  });

  it('should return -1', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1);
  });

  it('should return 0', () => {
    expect(strStr('a', '')).toBe(0);
  });

  it('should return -1', () => {
    expect(strStr('', 'a')).toBe(-1);
  });

  it('should return 0', () => {
    expect(strStr('', '')).toBe(0);
  });
});
