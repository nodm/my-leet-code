const boardSize = 9;

function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(boardSize).fill(0);
  const cols = new Array(boardSize).fill(0);
  const boxes = new Array(boardSize).fill(0);

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === '.') continue;

      const num = parseInt(board[i][j], 10);
      const pos = 1 << (num - 1);

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Check if the number has been seen before in the row, column, or box
      if (rows[i] & pos || cols[j] & pos || boxes[boxIndex] & pos) {
        return false;
      }

      // Mark the number as seen in the row, column, and box
      rows[i] |= pos;
      cols[j] |= pos;
      boxes[boxIndex] |= pos;
    }
  }

  return true;
}

export default isValidSudoku;
