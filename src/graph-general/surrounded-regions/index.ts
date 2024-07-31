/**
 Do not return anything, modify board in-place instead.
 */
export function solve(board: string[][]): void {
  if (!board || board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  // Helper function to mark boundary-connected regions with DFS
  function markBoundaryConnected(row: number, col: number): void {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== 'O'
    )
      return;

    board[row][col] = 'E'; // Mark this 'O' as edge-connected
    // Recursively mark all connected 'O's
    markBoundaryConnected(row - 1, col);
    markBoundaryConnected(row + 1, col);
    markBoundaryConnected(row, col - 1);
    markBoundaryConnected(row, col + 1);
  }

  // Step 1: Mark all 'O's connected to the boundary
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O') markBoundaryConnected(i, 0);
    if (board[i][cols - 1] === 'O') markBoundaryConnected(i, cols - 1);
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] === 'O') markBoundaryConnected(0, j);
    if (board[rows - 1][j] === 'O') markBoundaryConnected(rows - 1, j);
  }

  // Step 2: Flip the remaining 'O's to 'X' and 'E's back to 'O'
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'; // Capture surrounded 'O'
      } else if (board[i][j] === 'E') {
        board[i][j] = 'O'; // Restore edge-connected 'O'
      }
    }
  }
}
