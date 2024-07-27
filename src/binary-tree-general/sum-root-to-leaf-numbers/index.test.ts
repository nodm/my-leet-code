import {TreeNode} from '../TreeNode';
import {sumNumbers} from './index';

describe('sumNumbers', () => {
  it('should return 0 for an empty tree', () => {
    const root = null;
    const result = sumNumbers(root);
    expect(result).toBe(0);
  });

  it('should return the sum of numbers formed by root-to-leaf paths', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    const result = sumNumbers(root);
    expect(result).toBe(262);
  });

  it('should return the sum of numbers formed by root-to-leaf paths', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(9);
    root.right = new TreeNode(0);
    root.left.left = new TreeNode(5);
    root.left.right = new TreeNode(1);
    const result = sumNumbers(root);
    expect(result).toBe(1026);
  });
});
