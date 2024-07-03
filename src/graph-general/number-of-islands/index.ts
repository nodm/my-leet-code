export function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const graph = new Map<string, string[]>();

  // Build the graph
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        const node = `${i},${j}`;
        graph.set(node, []);
        if (i > 0 && grid[i - 1][j] === '1') {
          graph.get(node)!.push(`${i - 1},${j}`);
        }
        if (i < rows - 1 && grid[i + 1][j] === '1') {
          graph.get(node)!.push(`${i + 1},${j}`);
        }
        if (j > 0 && grid[i][j - 1] === '1') {
          graph.get(node)!.push(`${i},${j - 1}`);
        }
        if (j < cols - 1 && grid[i][j + 1] === '1') {
          graph.get(node)!.push(`${i},${j + 1}`);
        }
      }
    }
  }

  // Count the number of islands
  let count = 0;
  const visited = new Set<string>();
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      count++;
      dfs(graph, node, visited);
    }
  }
  return count;
}

function dfs(graph: Map<string, string[]>, node: string, visited: Set<string>) {
  visited.add(node);
  for (const neighbor of graph.get(node)!) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}
