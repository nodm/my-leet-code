// The key insight here is to represent the given equations as a graph
// where each variable is a node, and each equation represents a directed
// edge with a weight equivalent to the division value. The problem then
// reduces to finding paths in this graph and computing the product of
// weights along these paths.

/**
Time Complexity O(n + q * V)
  Graph Construction:
    * Building the graph involves iterating over the equations and values arrays.
    * For each equation, we add the relationship and its inverse, which are constant-time operations.
    * Since there are n equations, the time complexity for this part is O(n).
  Breadth-First Search (BFS) for each query:
    * In the worst case, BFS might need to visit all nodes and edges.
    * If there are V nodes and E edges, the BFS traversal will take O(V+E) time.
    * Each query might require a BFS traversal.
    * Since the graph is sparse in many practical cases, O(V). Therefore, the BFS time complexity is O(V+V)=O(V).
  Query Evaluation:
    * There are q queries.
    * Each query requires a BFS traversal with time complexity O(V).

  Combining these:
    Total Time Complexity = Time to build the graph + Time to process each query = O(n) + q * O(V)


Space Complexity O(V)
  Total Memory Complexity = Space for graph + Space for BFS traversal = O(V) + O(V) = O(V)

*/

type Graph = Map<string, Map<string, number>>;

export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph: Graph = buildGraph(equations, values);
  const results: number[] = [];

  for (const [start, end] of queries) {
    if (!graph.has(start) || !graph.has(end)) {
      results.push(-1.0);
    } else if (start === end) {
      results.push(1.0);
    } else {
      const result = bfs(graph, start, end);
      results.push(result);
    }
  }

  return results;
}

function buildGraph(equations: string[][], values: number[]): Graph {
  const graph: Graph = new Map();

  for (let i = 0; i < equations.length; i += 1) {
    const [a, b] = equations[i];
    const value = values[i];

    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());

    graph.get(a)!.set(b, value);
    graph.get(b)!.set(a, 1 / value);
  }

  return graph;
}

function bfs(graph: Graph, start: string, end: string): number {
  const queue: [string, number][] = [[start, 1]];
  const visited: Set<string> = new Set();

  while (queue.length > 0) {
    const [current, product] = queue.shift()!;

    if (current === end) {
      return product;
    }

    visited.add(current);

    for (const [neighbor, value] of graph.get(current)!) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, product * value]);
      }
    }
  }

  return -1.0;
}
