export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  const result: number[] = [];

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // Traverse the top row from left to right
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;

    // Traverse the right column from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse the bottom row from right to left
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // Traverse the left column from bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}
