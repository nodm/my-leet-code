/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowHasZero = false;
  for (let i = 0; i < n; i += 1) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  let firstColHasZero = false;
  for (let i = 0; i < m; i += 1) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i += 1) {
    if (matrix[i][0] === 0) {
      if (i === 0 && !firstRowHasZero) {
        continue;
      }
      matrix[i].fill(0);
    }
  }

  for (let i = 1; i < n; i += 1) {
    if (matrix[0][i] === 0) {
      if (i === 0 && !firstColHasZero) {
        continue;
      }
      for (let j = 0; j < m; j += 1) {
        matrix[j][i] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    matrix[0].fill(0);
  }

  if (firstColHasZero) {
    for (let i = 0; i < m; i += 1) {
      matrix[i][0] = 0;
    }
  }
}
