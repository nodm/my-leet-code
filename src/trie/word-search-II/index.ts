/**
 * Time Complexity: O(k * L + m * n * 4^10)
 *   Trie Construction:
 *     Building the Trie involves inserting each word from the list into the Trie.
 *     Each word insertion takes O(L) time, where L is the length of the word.
 *     If there are k words, the total time to construct the Trie is O(k * L).
 *   DFS Traversal:
 *     For each cell in the board, we may start a DFS.
 *     In the worst case, each DFS can potentially visit all cells in the board once.
 *     The board has m * n cells, and each cell exploration involves up to 4 directions
 *     (up, down, left, right).
 *     The depth of the DFS can go up to the length of the longest word, which is at most
 *     10 (see the constrains).
 *     Thus, the DFS time complexity is O(m * n * 4^10) in the worst case. However, this
 *     is an extreme upper bound and is generally much lower in practice due to early
 *     termination when no valid path is found.
 *
 * Space Complexity: O(k * L)
 *   Trie Storage:
 *     The space required to store the Trie depends on the number of nodes.
 *     In the worst case, the Trie can have up to k * L nodes, where k is the number of
 *     words and L is the average length of the words.
 *   DFS Stack:
 *     The maximum depth of the DFS stack is the length of the longest word, which is at
 *     most 10.
 *     The stack space required is O(L), where L is the length of the longest word.
 *   Visited Marking:
 *     We temporarily modify the board to mark visited cells. Since we restore the board
 *     after each DFS call, the space complexity for marking visited cells is O(1).
 *   Result Storage:
 *     The result set stores the words found, and in the worst case, it stores all words
 *     from the list, requiring O(k * L) space.
 */

class TrieNode {
  public children = new Map<string, TrieNode>();
  public isEnd = false;

  constructor() {}
}

class Trie {
  root: TrieNode = new TrieNode();

  constructor() {}

  insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isEnd = true;
  }

  startsWith(prefix: string): TrieNode | null {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children.has(char)) return null;

      node = node.children.get(char)!;
    }

    return node;
  }
}

export function findWords(board: string[][], words: string[]): string[] {
  if (!board.length || !words.length) return [];

  const trie = new Trie();

  for (const word of words) {
    trie.insert(word);
  }

  const result = new Set<string>();
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dfs = (row: number, col: number, node: TrieNode, path: string) => {
    if (node.isEnd) {
      result.add(path);
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      !node.children.has(board[row][col])
    ) {
      return;
    }

    const char = board[row][col];
    board[row][col] = '#'; // Mark as visited
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      dfs(newRow, newCol, node.children.get(char)!, path + char);
    }
    board[row][col] = char; // Unmark
  };

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const startNode = trie.startsWith(board[row][col]);

      if (startNode) {
        dfs(row, col, trie.root, '');
      }
    }
  }

  return Array.from<string>(result);
}
