export function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    // Helper function to perform DFS and mark visited land
    function dfs(i: number, j: number): void {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1')
          return;

        grid[i][j] = '0'; // Mark as visited
        dfs(i + 1, j); // Down
        dfs(i - 1, j); // Up
        dfs(i, j + 1); // Right
        dfs(i, j - 1); // Left
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}
