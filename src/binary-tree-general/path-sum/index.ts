import {TreeNode} from '../TreeNode';

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  const remainingSum = targetSum - root.val;

  if (!root.left && !root.right) {
    return remainingSum === 0;
  }

  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
}
