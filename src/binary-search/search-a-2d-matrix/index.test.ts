import {searchMatrix} from '.';

describe('searchMatrix', () => {
  it('should return true if target exists in the matrix', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 3;
    expect(searchMatrix(matrix, target)).toBe(true);
  });

  it('should return false if target does not exist in the matrix', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 13;
    expect(searchMatrix(matrix, target)).toBe(false);
  });

  it('should return false if matrix is empty', () => {
    const matrix: number[][] = [];
    const target = 5;
    expect(searchMatrix(matrix, target)).toBe(false);
  });

  it('should return false if target is smaller than the smallest element in the matrix', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 0;
    expect(searchMatrix(matrix, target)).toBe(false);
  });

  it('should return false if target is larger than the largest element in the matrix', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 100;
    expect(searchMatrix(matrix, target)).toBe(false);
  });
});
