import {zigzagLevelOrder} from '.';
import {TreeNode} from '../TreeNode';

describe('zigzagLevelOrder', () => {
  it('should return an empty array for an empty tree', () => {
    const root = null;
    const expected: number[][] = [];
    const result = zigzagLevelOrder(root);
    expect(result).toEqual(expected);
  });

  it('should return the zigzag level order traversal of a binary tree', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const expected = [[3], [20, 9], [15, 7]];
    const result = zigzagLevelOrder(root);
    expect(result).toEqual(expected);
  });
});
