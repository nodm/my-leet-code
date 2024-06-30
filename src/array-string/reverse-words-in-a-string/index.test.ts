import {reverseWords} from './index';
describe('reverseWords', () => {
  it('should reverse the words in a string', () => {
    expect(reverseWords('hello world')).toBe('world hello');
    expect(reverseWords('  hello  world  ')).toBe('world hello');
    expect(reverseWords('a good   example')).toBe('example good a');
    expect(reverseWords('  the sky is blue  ')).toBe('blue is sky the');
  });

  it('should handle empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  it('should handle string with only spaces', () => {
    expect(reverseWords('   ')).toBe('');
  });
});
describe('reverseWords', () => {
  it('should reverse the words in a string', () => {
    expect(reverseWords('hello world')).toBe('world hello');
    expect(reverseWords('  hello  world  ')).toBe('world hello');
    expect(reverseWords('a good   example')).toBe('example good a');
  });

  it('should handle empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  it('should handle string with only spaces', () => {
    expect(reverseWords('   ')).toBe('');
  });
});
