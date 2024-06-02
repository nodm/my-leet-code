import plusOne from '.';

describe('plusOne()', () => {
  test.each([
    [
      [1, 2, 3],
      [1, 2, 4],
    ],
    [
      [4, 3, 2, 1],
      [4, 3, 2, 2],
    ],
    [[0], [1]],
    [[9], [1, 0]],
    [
      [9, 9],
      [1, 0, 0],
    ],
  ])('plusOne(%p) should return %p', (digits, expected) => {
    expect(plusOne(digits)).toEqual(expected);
  });
});
