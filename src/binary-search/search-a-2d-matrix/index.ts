/**
 * Time Complexity:
 *   O(log(m * n)) since we're performing a binary search over m * n elements.
 * Space Complexity:
 *   O(1) as we use a constant amount of extra space.
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;

  if (!m) return false;

  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
