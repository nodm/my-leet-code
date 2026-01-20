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

import type {TreeNode} from '../TreeNode';

/*
 * Time Complexity: O(n), where n is the number of nodes in
 *                  the binary tree, because it traverses each
 *                  node at most once
 * Space Complexity: O(h), where h is the height of the tree,
 *                   due to the recursion stack.
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both left and right recursive calls return non-null values,
  // it means p and q are found in different subtrees. Hence, the
  // current node is their LCA.
  if (left !== null && right !== null) {
    return root;
  }

  // If one of the recursive calls returns a non-null value,
  // propagate that value upwards
  return left !== null ? left : right;
}
