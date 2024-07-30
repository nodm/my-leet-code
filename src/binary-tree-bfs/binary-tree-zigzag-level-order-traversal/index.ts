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

/**
 * Time complexity: O(n), where n is the number of nodes in the tree, as each node is processed once.
 * Space complexity: O(n) in the worst case due to the queue storage.
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  if (!root) return result;

  const queue: TreeNode[] = [root];
  let isLeftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const levelValues: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      if (isLeftToRight) {
        levelValues.push(node.val);
      } else {
        levelValues.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelValues);
    isLeftToRight = !isLeftToRight;
  }

  return result;
}
