import canConstruct from './index';

describe('canConstruct', () => {
  test.each([
    ['a', 'b', false],
    ['aa', 'ab', false],
    ['aa', 'aab', true],
    ['a', 'a', true],
    ['a', '', false],
    ['', 'a', true],
    ['', '', true],
  ])(
    'canConstruct(%s, %s) should return %s',
    (ransomNote, magazine, expected) => {
      expect(canConstruct(ransomNote, magazine)).toBe(expected);
    },
  );
});
