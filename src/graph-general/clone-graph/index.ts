/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

export class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// export function cloneGraph(node: _Node | null): _Node | null {
//   if (!node) return null;

//   const clonedNodes = new Map<_Node, _Node>();

//   const dfs = (originalNode: _Node) => {
//     if (clonedNodes.has(originalNode)) return clonedNodes.get(originalNode);

//     const clone = new _Node(originalNode.val);
//     clonedNodes.set(originalNode, clone);

//     for (const neighbor of originalNode.neighbors) {
//       clone.neighbors.push(dfs(neighbor)!);
//     }

//     return clone;
//   };

//   return dfs(node)!;
// }

/**
 * The time complexity is O(N+M), where N is the number of nodes
 * and M is the number of edges.
 */
export function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const clonedNodes = new Map<number, _Node>();

  const dfs = (originalNode: _Node) => {
    if (clonedNodes.has(originalNode.val))
      return clonedNodes.get(originalNode.val);

    const clone = new _Node(originalNode.val);
    clonedNodes.set(originalNode.val, clone);

    for (const neighbor of originalNode.neighbors) {
      clone.neighbors.push(dfs(neighbor)!);
    }

    return clone;
  };

  return dfs(node)!;
}
