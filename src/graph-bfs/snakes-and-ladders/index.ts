// To solve the problem of finding the least number of moves required
// to reach the last square on a Snakes and Ladders board, we can use
// the Breadth-First Search (BFS) algorithm. BFS is suitable here because
// it explores all positions at the current "move" level before moving
// to the next level, ensuring that we find the shortest path in terms
// of moves.

export function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const lastCellNumber = n * n;

  function getBoardValue(position: number) {
    const quotient = Math.floor((position - 1) / n);
    const row = n - 1 - quotient;
    const remainder = (position - 1) % n;
    const col = quotient % 2 === 0 ? remainder : n - 1 - remainder;

    return board[row][col];
  }

  const visited = new Set();
  const queue = [[1, 0]]; // [current position, number of moves]
  visited.add(1);

  while (queue.length > 0) {
    const [current, moves] = queue.shift()!;

    for (let i = 1; i <= 6; i += 1) {
      let nextPos = current + i;

      if (nextPos > lastCellNumber) continue;

      const boardValue = getBoardValue(nextPos);
      if (boardValue !== -1) {
        nextPos = boardValue;
      }

      if (nextPos === lastCellNumber) return moves + 1;

      if (!visited.has(nextPos)) {
        visited.add(nextPos);
        queue.push([nextPos, moves + 1]);
      }
    }
  }

  return -1;
}
