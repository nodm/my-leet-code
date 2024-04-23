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
    public right: TreeNode | null = null
  ) {}
}
