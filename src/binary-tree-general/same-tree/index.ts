import {TreeNode} from '../TreeNode';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base cases
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }

  // Recursive cases
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
