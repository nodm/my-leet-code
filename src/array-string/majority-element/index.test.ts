import majorityElement from './index';

describe('majorityElement', () => {
  test.each([
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2],
  ])('majorityElement(%p) should return %i', (num, expected) => {
    expect(majorityElement(num)).toBe(expected);
  });
});
