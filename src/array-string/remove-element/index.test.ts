import removeElement from './index';

describe('removeElement', () => {
  test.each([
    [[3, 2], 3, 1],
    [[3, 2, 2, 3], 2, 2],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5],
  ])('removeElement(%p, %i) should return %i', (num, val, expected) => {
    expect(removeElement(num, val)).toBe(expected);
  });
});
