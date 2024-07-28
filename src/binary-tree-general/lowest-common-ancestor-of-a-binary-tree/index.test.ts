import {lowestCommonAncestor} from './index';
import {TreeNode} from '../TreeNode';

describe('lowestCommonAncestor', () => {
  const root = new TreeNode(3);
  const node1 = new TreeNode(5);
  const node2 = new TreeNode(1);
  const node3 = new TreeNode(6);
  const node4 = new TreeNode(2);
  const node5 = new TreeNode(0);
  const node6 = new TreeNode(8);
  const node7 = new TreeNode(7);
  const node8 = new TreeNode(4);

  root.left = node1;
  root.right = node2;
  node1.left = node3;
  node1.right = node4;
  node2.left = node5;
  node2.right = node6;
  node4.left = node7;
  node4.right = node8;

  test('should return "1" as the lowest common ancestor of the nodes "1" and  "8" in a binary tree', () => {
    expect(lowestCommonAncestor(root, node1, node8)).toBe(node1);
  });

  test('should return "5" as the lowest common ancestor of the nodes "5" and  "4" in a binary tree', () => {
    expect(lowestCommonAncestor(root, node1, node8)).toBe(node1);
  });

  test('should return "1" as the lowest common ancestor of the nodes "0" and  "8" in a binary tree', () => {
    expect(lowestCommonAncestor(root, node5, node6)).toBe(node2);
  });

  test('should return "3" as the lowest common ancestor of the nodes "4" and  "8" in a binary tree', () => {
    expect(lowestCommonAncestor(root, node8, node6)).toBe(root);
  });
});
