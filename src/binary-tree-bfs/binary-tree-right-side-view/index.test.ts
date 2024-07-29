import {rightSideView} from '.';
import {TreeNode} from '../TreeNode';

describe('rightSideView', () => {
  it('returns an empty array for an empty tree', () => {
    expect(rightSideView(null)).toEqual([]);
  });

  it('returns the correct right side view for a tree with one node', () => {
    const root = new TreeNode(1);
    expect(rightSideView(root)).toEqual([1]);
  });

  it('returns the correct right side view for a tree with multiple nodes', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(5);
    expect(rightSideView(root)).toEqual([1, 3, 5]);
  });
});
