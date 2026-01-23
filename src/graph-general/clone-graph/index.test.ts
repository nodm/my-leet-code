import {
  _Node,
  cloneGraph,
  cloneGraphOptimised,
  cloneGraphBFS,
} from '.';

// Helper function to create a test graph
function createTestGraph() {
  const node1 = new _Node(1);
  const node2 = new _Node(2);
  const node3 = new _Node(3);
  const node4 = new _Node(4);

  node1.neighbors.push(node2, node4);
  node2.neighbors.push(node1, node3);
  node3.neighbors.push(node2, node4);
  node4.neighbors.push(node1, node3);

  return node1;
}

// Helper function to verify clone
function verifyClone(original: _Node, cloned: _Node) {
  expect(cloned).not.toBe(original);
  expect(cloned.val).toBe(original.val);
  expect(cloned.neighbors.length).toBe(original.neighbors.length);

  for (let i = 0; i < cloned.neighbors.length; i++) {
    expect(cloned.neighbors[i]).not.toBe(original.neighbors[i]);
    expect(cloned.neighbors[i].val).toBe(original.neighbors[i].val);
  }
}

describe('cloneGraph', () => {
  test('should return null for null input', () => {
    expect(cloneGraph(null)).toBe(null);
  });

  test('should clone a graph with a single node', () => {
    const node = new _Node(1);
    const clonedNode = cloneGraph(node);

    expect(clonedNode).not.toBe(node);
    expect(clonedNode?.val).toBe(node.val);
    expect(clonedNode?.neighbors.length).toBe(0);
  });

  test('should clone a graph with multiple nodes', () => {
    const original = createTestGraph();
    const cloned = cloneGraph(original);

    if (cloned) {
      verifyClone(original, cloned);
    }
  });
});

describe('cloneGraphOptimised', () => {
  test('should return null for null input', () => {
    expect(cloneGraphOptimised(null)).toBe(null);
  });

  test('should clone a graph with a single node', () => {
    const node = new _Node(1);
    const clonedNode = cloneGraphOptimised(node);

    expect(clonedNode).not.toBe(node);
    expect(clonedNode?.val).toBe(node.val);
    expect(clonedNode?.neighbors.length).toBe(0);
  });

  test('should clone a graph with multiple nodes', () => {
    const original = createTestGraph();
    const cloned = cloneGraphOptimised(original);

    if (cloned) {
      verifyClone(original, cloned);
    }
  });
});

describe('cloneGraphBFS', () => {
  test('should return null for null input', () => {
    expect(cloneGraphBFS(null)).toBe(null);
  });

  test('should clone a graph with a single node', () => {
    const node = new _Node(1);
    const clonedNode = cloneGraphBFS(node);

    expect(clonedNode).not.toBe(node);
    expect(clonedNode?.val).toBe(node.val);
    expect(clonedNode?.neighbors.length).toBe(0);
  });

  test('should clone a graph with multiple nodes', () => {
    const original = createTestGraph();
    const cloned = cloneGraphBFS(original);

    if (cloned) {
      verifyClone(original, cloned);
    }
  });
});
