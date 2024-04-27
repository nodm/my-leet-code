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

/**
 * Iterative solution
 */
export function isSymmetricIterative(root: TreeNode | null): boolean {
  if (!root) return true;

  let level: (TreeNode | null)[] = [root];

  while (level.length) {
    for (let i = 0; i < level.length / 2; i += 1) {
      if (level[i]?.val !== level[level.length - 1 - i]?.val) return false;
    }

    level = level.reduce(
      (acc, node) => {
        return node ? [...acc, node.left, node.right] : acc;
      },
      [] as (TreeNode | null)[]
    );
  }

  return true;
}

/**
 * Recursive solution
 */
const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
  if (!left && !right) return true;
  if (!left || !right) return false;

  return (
    left.val === right.val &&
    isMirror(left.left, right.right) && // Pay attention here: * -  - *
    isMirror(left.right, right.left) // Pay attention here: - *  * -
  );
};

export function isSymmetricRecursive(root: TreeNode | null): boolean {
  if (!root) return true; // An empty tree is symmetric

  return isMirror(root.left, root.right);
}

export default isSymmetricRecursive;
