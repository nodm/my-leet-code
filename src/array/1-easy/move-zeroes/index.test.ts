import moveZeroes from './index';

describe('moveZeroes', () => {
  test.each([
    [
      [0, 1, 0, 3, 12],
      [1, 3, 12, 0, 0],
    ],
    [[0], [0]],
  ])('moveZeroes(%p) should return %p', (input, expected) => {
    moveZeroes(input);
    expect(input).toEqual(expected);
  });
});
