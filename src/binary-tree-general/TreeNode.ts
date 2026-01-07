export class TreeNode {
  // val: number;
  // left: TreeNode | null;
  // right: TreeNode | null;

  // constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
  //   this.val = val === undefined ? 0 : val;
  //   this.left = left === undefined ? null : left;
  //   this.right = right === undefined ? null : right;
  // }

  constructor(
    public val = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

export function createTree(
  values: (number | null)[],
  index = 0,
): TreeNode | null {
  if (index >= values.length || values[index] === null) {
    return null;
  }

  const node = new TreeNode(values[index] as number);
  node.left = createTree(values, 2 * index + 1);
  node.right = createTree(values, 2 * index + 2);

  return node;
}
