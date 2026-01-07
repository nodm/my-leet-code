import longestCommonPrefix from '.';

describe('longestCommonPrefix', () => {
  test.each([
    ['fl', ['flower', 'flow', 'flight']],
    ['', ['dog', 'racecar', 'car']],
    ['good', ['good']],
    ['', ['']],
  ])(
    'should return %p as the longest common prefix for the strings %p',
    (expected, strs) => {
      expect(longestCommonPrefix(strs)).toBe(expected);
    },
  );
});
