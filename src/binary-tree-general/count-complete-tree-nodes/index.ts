import {TreeNode} from '../TreeNode';

export function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  // Complexity O(N)
  // return countNodes(root.left) + countNodes(root.right) + 1;

  // Complexity O(log N * log N)

  const leftHeight = getDepth(root, 'left');
  const rightHeight = getDepth(root, 'right');

  if (leftHeight === rightHeight) {
    return 2 ** leftHeight - 1;
  }

  return countNodes(root.left) + countNodes(root.right) + 1;
}

function getDepth(node: TreeNode | null, side: 'left' | 'right'): number {
  let depth = 0;

  while (node) {
    depth += 1;
    node = node[side];
  }

  return depth;
}
