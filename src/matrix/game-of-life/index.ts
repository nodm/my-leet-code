/**
 * Do not return anything, modify board in-place instead.
 *
 * Time Complexity: O(m * n)
 */
const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
const OVERCROWDING = 3;
const LONGEVITY = 2;
const REPRODUCTION = 3;
const enum Cell {
  Empty = 0,
  Alive = 1,
  WillDie = 2,
  WillBorn = 3,
}

export function gameOfLife(board: number[][]): void {
  const m = board.length;
  const n = board[0].length;

  const countLiveNeighbors = (row: number, col: number): number => {
    let count = 0;
    for (const [dx, dy] of DIRECTIONS) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        (board[newRow][newCol] === Cell.Alive ||
          board[newRow][newCol] === Cell.WillDie)
      ) {
        count++;
      }
    }
    return count;
  };

  // First pass: apply rules and mark changes
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const liveNeighbors = countLiveNeighbors(row, col);

      if (
        board[row][col] === Cell.Alive &&
        (liveNeighbors < LONGEVITY || liveNeighbors > OVERCROWDING)
      ) {
        board[row][col] = Cell.WillDie;
      }
      if (board[row][col] === Cell.Empty && liveNeighbors === REPRODUCTION) {
        board[row][col] = Cell.WillBorn;
      }
    }
  }

  // Second pass: finalize the board by converting temporary states to their final values
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === Cell.WillDie) {
        board[row][col] = Cell.Empty;
      }
      if (board[row][col] === Cell.WillBorn) {
        board[row][col] = Cell.Alive;
      }
    }
  }
}
