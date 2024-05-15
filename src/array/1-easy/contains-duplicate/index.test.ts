import containsDuplicate from './index';

describe('containsDuplicate', () => {
  test.each([
    [[], false],
    [[1], false],
    [[1, 1], true],
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ])('containsDuplicate(%p) should return %p', (input, expected) => {
    expect(containsDuplicate(input)).toBe(expected);
  });
});
