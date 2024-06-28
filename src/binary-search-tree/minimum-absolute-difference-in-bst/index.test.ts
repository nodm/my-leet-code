import {TreeNode} from '../TreeNode';
import {getMinimumDifference} from './index';

describe('Testing "getMinimumDifference"', () => {
  test('should return 0 when root is null', () => {
    const root: TreeNode | null = null;
    expect(getMinimumDifference(root)).toEqual(Number.MAX_SAFE_INTEGER);
  });

  test('should return the minimum absolute difference when there is only one node', () => {
    const root: TreeNode = new TreeNode(5);
    expect(getMinimumDifference(root)).toEqual(Number.MAX_SAFE_INTEGER);
  });

  test('should return the minimum absolute difference when there are multiple nodes', () => {
    const root: TreeNode = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    expect(getMinimumDifference(root)).toEqual(1);
  });

  test('should return the minimum absolute difference when there are multiple nodes', () => {
    const root: TreeNode = new TreeNode(1);
    root.left = new TreeNode(0);
    root.right = new TreeNode(48);
    root.right.left = new TreeNode(12);
    root.right.right = new TreeNode(49);
    expect(getMinimumDifference(root)).toEqual(1);
  });
});
