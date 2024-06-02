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

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  let nodesByLevel: TreeNode[] = [root];

  while (nodesByLevel.length) {
    result.push(nodesByLevel.map(node => node.val));

    nodesByLevel = nodesByLevel.reduce((acc, node) => {
      if (node.left) acc.push(node.left);
      if (node.right) acc.push(node.right);
      return acc;
    }, [] as TreeNode[]);
  }

  return result;
}
