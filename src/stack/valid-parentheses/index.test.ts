import isValid from '.';

describe('isValid', () => {
  test.each([
    [true, '()'],
    [true, '()[]{}'],
    [false, '(]'],
  ])('should return %s when calling isValid(%s)', (expected, input) => {
    expect(isValid(input)).toBe(expected);
  });
});
