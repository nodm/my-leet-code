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
import {TreeNode} from '../../TreeNode';

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);

  const tree = new TreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  );

  return tree;
}
