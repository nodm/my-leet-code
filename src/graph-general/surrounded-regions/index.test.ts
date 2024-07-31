import {solve} from '.';

describe('solve', () => {
  it('should solve the board with no surrounded regions', () => {
    const board: string[][] = [
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ];
    solve(board);
    expect(board).toEqual([
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ]);
  });

  it('should solve the board with surrounded regions', () => {
    const board: string[][] = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ];
    solve(board);
    expect(board).toEqual([
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X'],
    ]);
  });

  it('should solve the board with no regions', () => {
    const board: string[][] = [];
    solve(board);
    expect(board).toEqual([]);
  });
});
