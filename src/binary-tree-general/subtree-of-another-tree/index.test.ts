import { describe, expect, it } from 'vitest';
import { isSubtree } from './index';
import { TreeNode, createTree } from '../TreeNode';

describe('isSubtree', () => {
  it('should return true when subRoot is a subtree of root (Example 1)', () => {
    // root = [3,4,5,1,2], subRoot = [4,1,2]
    const root = createTree([3, 4, 5, 1, 2]);
    const subRoot = createTree([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false when subRoot is not a subtree (Example 2)', () => {
    // root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
    const root = new TreeNode(3);
    root.left = new TreeNode(4);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(2);
    root.left.right.left = new TreeNode(0);

    const subRoot = createTree([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should return true when root and subRoot are identical', () => {
    const root = createTree([1, 2, 3]);
    const subRoot = createTree([1, 2, 3]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return true when subRoot is a single node in root', () => {
    const root = createTree([3, 4, 5, 1, 2]);
    const subRoot = new TreeNode(5);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return true when subRoot is null', () => {
    const root = createTree([1, 2, 3]);
    expect(isSubtree(root, null)).toBe(true);
  });

  it('should return false when root is null but subRoot is not', () => {
    const subRoot = createTree([1, 2]);
    expect(isSubtree(null, subRoot)).toBe(false);
  });

  it('should return true when both root and subRoot are null', () => {
    expect(isSubtree(null, null)).toBe(true);
  });

  it('should return false when structure matches but values differ', () => {
    const root = createTree([3, 4, 5, 1, 2]);
    const subRoot = createTree([4, 1, 3]); // Different value
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should return true when subRoot is at the right subtree', () => {
    const root = createTree([3, 4, 5, 1, 2]);
    const subRoot = new TreeNode(5);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false when subRoot has extra nodes', () => {
    const root = createTree([1, 2]);
    const subRoot = createTree([1, 2, 3]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle deep trees correctly', () => {
    // Create a deeper tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.left.left.left.left = new TreeNode(5);

    const subRoot = new TreeNode(3);
    subRoot.left = new TreeNode(4);
    subRoot.left.left = new TreeNode(5);

    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false when partial match exists but not complete', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);

    const subRoot = new TreeNode(2);
    subRoot.left = new TreeNode(4);
    subRoot.right = new TreeNode(5); // Extra node

    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle single node trees', () => {
    const root = new TreeNode(1);
    const subRoot = new TreeNode(1);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false for single nodes with different values', () => {
    const root = new TreeNode(1);
    const subRoot = new TreeNode(2);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle negative values', () => {
    const root = createTree([-10, -5, -3]);
    const subRoot = new TreeNode(-5);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return true when subRoot matches a leaf-level subtree', () => {
    const root = new TreeNode(12);
    root.left = new TreeNode(10);
    root.right = new TreeNode(15);
    root.left.left = new TreeNode(8);
    root.left.right = new TreeNode(11);

    const subRoot = new TreeNode(10);
    subRoot.left = new TreeNode(8);
    subRoot.right = new TreeNode(11);

    expect(isSubtree(root, subRoot)).toBe(true);
  });
});
