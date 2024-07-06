import {setZeroes} from './index';
describe('setZeroes', () => {
  test.each([
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
    ],
    [
      [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ],
      [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    ],
  ])('setZeroes(%j) should return %j', (matrix, expected) => {
    setZeroes(matrix);
    expect(matrix).toEqual(expected);
  });
});
