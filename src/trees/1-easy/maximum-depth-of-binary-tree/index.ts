import {TreeNode} from '../../TreeNode';

export function _maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  let nodes: TreeNode[] = [root];
  let depth = 0;

  while (nodes.length) {
    depth += 1;

    nodes = nodes.reduce((acc, node) => {
      if (node.left) acc.push(node.left);
      if (node.right) acc.push(node.right);

      return acc;
    }, [] as TreeNode[]);
  }

  return depth;
}

export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
