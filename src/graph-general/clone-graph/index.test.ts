import {_Node, cloneGraph} from '.';

describe('cloneGraph', () => {
  test('should return null for null input', () => {
    expect(cloneGraph(null)).toBe(null);
  });

  test('should clone a graph with a single node', () => {
    const node = new _Node(1);
    const clonedNode = cloneGraph(node)!;

    expect(clonedNode).not.toBe(node);
    expect(clonedNode.val).toBe(node.val);
    expect(clonedNode.neighbors.length).toBe(0);
  });

  test('should clone a graph with multiple nodes', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);
    const node4 = new _Node(4);

    node1.neighbors.push(node2, node4);
    node2.neighbors.push(node1, node3);
    node3.neighbors.push(node2, node4);
    node4.neighbors.push(node1, node3);

    const clonedNode = cloneGraph(node1)!;

    expect(clonedNode).not.toBe(node1);
    expect(clonedNode.val).toBe(node1.val);
    expect(clonedNode.neighbors.length).toBe(node1.neighbors.length);

    for (let i = 0; i < clonedNode.neighbors.length; i++) {
      expect(clonedNode.neighbors[i]).not.toBe(node1.neighbors[i]);
      expect(clonedNode.neighbors[i].val).toBe(node1.neighbors[i].val);
    }
  });
});
