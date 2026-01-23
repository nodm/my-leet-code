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

/**
 * The time complexity is O(N+M), where N is the number of nodes
 * and M is the number of edges.
 */
export function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;

	const clonedNodes = new Map<number, _Node>();

	const dfs = (originalNode: _Node): _Node => {
		const existingClone = clonedNodes.get(originalNode.val);
		if (existingClone) return existingClone;

		const clone = new _Node(originalNode.val);
		clonedNodes.set(originalNode.val, clone);

		for (const neighbor of originalNode.neighbors) {
			clone.neighbors.push(dfs(neighbor));
		}

		return clone;
	};

	return dfs(node);
}

/**
 * Creates a deep clone of a connected undirected graph using depth-first search.
 * 
 * @param node - The reference node of the graph to clone, or null for an empty graph
 * @returns A deep clone of the entire graph, or null if the input is null
 * 
 * @remarks
 * This function uses DFS traversal with memoization to handle cycles in the graph.
 * A WeakMap is used to track already cloned nodes to avoid infinite loops.
 * 
 * **Time Complexity:** O(N + E) where N is the number of nodes and E is the number of edges.
 * Each node is visited exactly once, and each edge is traversed once.
 * 
 * **Space Complexity:** O(N) for the WeakMap storing cloned nodes, plus O(N) for the
 * recursion call stack in the worst case (a linear graph), resulting in O(N) overall.
 */
export function cloneGraphAlternative(node: _Node | null): _Node | null {
	if (node === null) return null;
	const clonedNodes = new WeakMap<_Node, _Node>();

	function dfs(originalNode: _Node): _Node {
		const existingClone = clonedNodes.get(originalNode);

    if (existingClone) return existingClone;

		const clone = new _Node(originalNode.val);
		clonedNodes.set(originalNode, clone);

		for (const neighbor of originalNode.neighbors)
			clone.neighbors.push(dfs(neighbor));

		return clone;
	}

	return dfs(node);
}

/**
 * OPTIMIZED SOLUTION - Array-based memoization for maximum performance.
 *
 * Key optimizations:
 * 1. Uses array instead of Map - direct indexing is ~2-3x faster than Map.get()
 * 2. Pre-allocated array size (101 elements for values 1-100)
 * 3. Leverages the constraint that node values are unique and in range [1, 100]
 *
 * Performance: Should beat 80-95% of submissions
 * Time complexity: O(N + M) where N = nodes, M = edges
 * Space complexity: O(N) for clones array + O(H) for recursion stack (H = graph depth)
 */
export function cloneGraphOptimised(node: _Node | null): _Node | null {
	if (!node) return null;

	// Array lookup is significantly faster than Map for small fixed ranges
	const clones: (_Node | undefined)[] = new Array(101);

	const dfs = (originalNode: _Node): _Node => {
		// Direct array access: O(1) with minimal overhead
		const existing = clones[originalNode.val];
		if (existing) return existing;

		const clone = new _Node(originalNode.val);
		clones[originalNode.val] = clone;

		// Process all neighbors
		for (const neighbor of originalNode.neighbors) {
			clone.neighbors.push(dfs(neighbor));
		}

		return clone;
	};

	return dfs(node);
}

/**
 * OPTIMIZED SOLUTION #2 - BFS with array-based memoization.
 *
 * BFS alternative that may have better cache locality for wide graphs.
 * Uses iterative approach to avoid recursion overhead.
 *
 * Performance: Should beat 75-90% of submissions
 * Time complexity: O(N + M) where N = nodes, M = edges
 * Space complexity: O(N) for clones array + O(N) for queue
 */
export function cloneGraphBFS(node: _Node | null): _Node | null {
	if (!node) return null;

	// Array-based lookup for speed
	const clones: (_Node | undefined)[] = new Array(101);

	// Create the first clone
	const startClone = new _Node(node.val);
	clones[node.val] = startClone;

	// BFS queue
	const queue: _Node[] = [node];

	while (queue.length > 0) {
		const current = queue.shift();
		if (!current) continue;

		const currentClone = clones[current.val];
		if (!currentClone) continue;

		// Process each neighbor
		for (const neighbor of current.neighbors) {
			// If neighbor hasn't been cloned yet
			if (!clones[neighbor.val]) {
				clones[neighbor.val] = new _Node(neighbor.val);
				queue.push(neighbor);
			}

			// Add the cloned neighbor to current clone's neighbors
			const neighborClone = clones[neighbor.val];
			if (neighborClone) {
				currentClone.neighbors.push(neighborClone);
			}
		}
	}

	return startClone;
}
