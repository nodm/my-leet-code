import isIsomorphic from '.';

describe('isIsomorphic', () => {
  test.each([
    ['egg', 'add', true],
    ['foo', 'bar', false],
    ['paper', 'title', true],
    ['ab', 'aa', false],
    ['ab', 'ca', true],
  ])('isIsomorphic(%j, %j) should return %j', (s, t, expected) => {
    expect(isIsomorphic(s, t)).toBe(expected);
  });
});
