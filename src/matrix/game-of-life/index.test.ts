import {gameOfLife} from './index';
describe('gameOfLife', () => {
  test.each([
    [
      [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ],
    ],
    [
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 0],
      ],
    ],
    [
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    [
      [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ],
      [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
    ],
  ])(
    'should modify the board in-place according to the rules',
    (board, expected) => {
      gameOfLife(board);
      expect(board).toEqual(expected);
    }
  );
});
