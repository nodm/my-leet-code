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
import type { TreeNode } from '../TreeNode';

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (subRoot === null)
        return true;

    if (root === null)
        return false;

    if (isIdentical(root, subRoot))
        return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isIdentical(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null)
        return true;

    if (p === null || q === null)
        return false;

    return p.val === q.val && isIdentical(p.left, q.left) && isIdentical(p.right, q.right);
}