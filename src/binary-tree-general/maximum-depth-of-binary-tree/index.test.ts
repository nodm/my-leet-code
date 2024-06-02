import {maxDepth} from './index';
import {TreeNode} from '../../TreeNode';

describe('Maximum Depth of Binary Tree', () => {
  test('should return 0 for an empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  test('should return 1 for a tree with only one node', () => {
    const root: TreeNode = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  test('should return the maximum depth for a binary tree', () => {
    const root: TreeNode = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(maxDepth(root)).toBe(3);
  });
});
