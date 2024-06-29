import {TreeNode} from '../TreeNode';

export class BSTIterator {
  private stack: TreeNode[];

  constructor(root: TreeNode | null) {
    this.stack = [];
    this.leftMostInorder(root);
  }

  private leftMostInorder(node: TreeNode | null) {
    while (node !== null) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next(): number {
    const node = this.stack.pop()!;
    if (node.right !== null) {
      this.leftMostInorder(node.right);
    }
    return node.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
