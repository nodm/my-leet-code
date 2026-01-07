import {lengthOfLongestSubstring} from './index';
describe('lengthOfLongestSubstring', () => {
  test.each([
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
    ['', 0],
    ['a', 1],
  ])(
    '%# | lengthOfLongestSubstring(%s) should return %i',
    (input, expected) => {
      expect(lengthOfLongestSubstring(input)).toBe(expected);
    },
  );
});
