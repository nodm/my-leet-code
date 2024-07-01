import {TreeNode} from '../TreeNode';

/**
 Do not return anything, modify root in-place instead.
 */
export function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  let current = root;
  while (current) {
    if (current.left) {
      let rightMost = current.left;
      while (rightMost.right) {
        rightMost = rightMost.right;
      }

      rightMost.right = current.right;
      current.right = current.left;
      current.left = null;
    }

    current = current.right!;
  }
}
