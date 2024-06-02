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

export function isValidBST(
  root: TreeNode | null,
  min: number | undefined = undefined,
  max: number | undefined = undefined
): boolean {
  if (root === null) return true;

  if (max !== undefined && root.val >= max) {
    return false;
  }

  if (min !== undefined && root.val <= min) {
    return false;
  }

  if (root.left && !isValidBST(root.left, min, root.val)) {
    return false;
  }

  if (root.right && !isValidBST(root.right, root.val, max)) {
    return false;
  }

  return true;
}
