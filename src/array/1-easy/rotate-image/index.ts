/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // Swap elements across main diagonal (transpose the matrix)
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = i; j < matrix[i].length; j += 1) {
      if (i !== j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }

  // Reverse each row
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i].reverse();
  }
}

export default rotate;
