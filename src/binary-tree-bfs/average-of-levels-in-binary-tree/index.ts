import {TreeNode} from '../TreeNode';

export function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const nodeQueue: TreeNode[] = [root];
  const averages: number[] = [];

  while (nodeQueue.length) {
    const levelSize = nodeQueue.length;
    let sum = 0;

    for (let i = 0; i < levelSize; i += 1) {
      const node = nodeQueue.shift()!;
      sum += node.val;

      if (node.left) nodeQueue.push(node.left);
      if (node.right) nodeQueue.push(node.right);
    }

    averages.push(sum / levelSize);
  }

  return averages;
}
