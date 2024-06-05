import isHappy from './index';

describe('isHappy', () => {
  test.each([
    [19, true],
    [2, false],
    [7, true],
  ])('isHappy(%i) should return %p', (n, expected) => {
    expect(isHappy(n)).toBe(expected);
  });
});
