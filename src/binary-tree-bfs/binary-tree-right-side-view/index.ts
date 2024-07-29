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
 Time Complexity: O(n), where n is the number of nodes in the tree, as each node is processed once.
 Space Complexity: O(n) in the worst case due to the queue storage.
*/
export function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift() as TreeNode;

      if (i === levelSize - 1) {
        result.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}
