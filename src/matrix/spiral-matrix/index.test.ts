import {spiralOrder} from './index';
describe('spiralOrder', () => {
  it('returns the correct spiral order for a 1x1 matrix', () => {
    const matrix: number[][] = [[1]];
    expect(spiralOrder(matrix)).toEqual([1]);
  });

  it('returns the correct spiral order for a 3x3 matrix', () => {
    const matrix: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('returns the correct spiral order for a 4x5 matrix', () => {
    const matrix: number[][] = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    expect(spiralOrder(matrix)).toEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12,
    ]);
  });
});
