import {mySqrt} from './index';

describe('mySqrt', () => {
  test.each([
    // [0, 0],
    // [1, 1],
    // [2, 1],
    // [3, 1],
    // [4, 2],
    // [5, 2],
    // [8, 2],
    // [9, 3],
    // [16, 4],
    // [17, 4],
    [25, 5],
  ])('mySqrt(%d) should return %d', (x, expected) => {
    expect(mySqrt(x)).toBe(expected);
  });
});
