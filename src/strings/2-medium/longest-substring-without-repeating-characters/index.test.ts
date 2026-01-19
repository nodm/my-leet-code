import { lengthOfLongestSubstring } from './index';

describe('lengthOfLongestSubstring', () => {
  it('should return 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('should return 1 for a single character string', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  it('should return 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('should return 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('should return 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('should return 1 for a string with only a space', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  });

  it('should handle strings with special characters and numbers', () => {
    expect(lengthOfLongestSubstring('a1!a1!')).toBe(3);
  });

  it('should return the correct length for long unique strings', () => {
    expect(lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz')).toBe(26);
  });
});
