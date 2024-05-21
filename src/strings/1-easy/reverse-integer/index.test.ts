import reverse from './index';

describe('reverse', () => {
  test('reverse 123', () => {
    expect(reverse(123)).toBe(321);
  });

  test('reverse -123', () => {
    expect(reverse(-123)).toBe(-321);
  });

  test('reverse 120', () => {
    expect(reverse(120)).toBe(21);
  });

  test('reverse 0', () => {
    expect(reverse(0)).toBe(0);
  });

  test('reverse 1 534 236 469', () => {
    expect(reverse(1_534_236_469)).toBe(0);
  });

  test('reverse -2 147 483 648', () => {
    expect(reverse(-2_147_483_648)).toBe(0);
  });
});
