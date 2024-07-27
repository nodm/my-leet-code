/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import {TreeNode} from '../TreeNode';

/*
 Time complexity: The function still runs in O(n) time, where
                  n is the number of nodes in the tree. This
                  is optimal since each node needs to be visited
                  at least once.
 Space complexity: The space complexity is O(h), where h is the
                   height of the tree, due to the recursive call
                   stack.
*/
export function sumNumbers(root: TreeNode | null): number {
  if (root === null) return 0;

  const dfs = (node: TreeNode | null, currentSum: number): number => {
    if (node === null) return 0;

    currentSum = currentSum * 10 + node.val;

    if (node.left === null && node.right === null) {
      return currentSum;
    }

    const leftSum = dfs(node.left, currentSum);
    const rightSum = dfs(node.right, currentSum);

    return leftSum + rightSum;
  };

  return dfs(root, 0);
}
