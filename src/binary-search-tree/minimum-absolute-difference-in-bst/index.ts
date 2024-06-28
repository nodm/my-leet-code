import {TreeNode} from '../TreeNode';

export function getMinimumDifference(root: TreeNode | null): number {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let prev: TreeNode | null = null;

  function inOrderTraversal(node: TreeNode | null) {
    if (node === null) {
      return;
    }

    inOrderTraversal(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev.val);
    }

    prev = node;

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);

  return minDiff;
}
