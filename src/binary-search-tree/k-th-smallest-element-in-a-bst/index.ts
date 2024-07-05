import {TreeNode} from '../TreeNode';

export function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop()!;

    if (--k === 0) {
      return node.val;
    }

    node = node.right;
  }

  return -1;
}
