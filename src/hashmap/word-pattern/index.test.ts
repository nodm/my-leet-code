import wordPattern from './index';

describe('Word Pattern', () => {
  test.each([
    ['abba', 'dog cat cat dog', true],
    ['abba', 'dog cat cat fish', false],
    ['aaaa', 'dog cat cat dog', false],
    ['abba', 'dog dog dog dog', false],
  ])('wordPattern("%s", "%s") should return %s', (pattern, s, expected) => {
    expect(wordPattern(pattern, s)).toBe(expected);
  });
});
