import {TreeNode} from '../TreeNode';

export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  if (inorder.length === 0) return null;

  const inorderMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  function buildTreeHelper(
    inorderStart: number,
    inorderEnd: number,
    postorderStart: number,
    postorderEnd: number
  ): TreeNode | null {
    if (postorderStart > postorderEnd) return null;

    const rootVal = postorder[postorderEnd];
    const root = new TreeNode(rootVal);
    const inorderRoootIndex = inorderMap.get(rootVal)!;

    root.left = buildTreeHelper(
      inorderStart,
      inorderRoootIndex - 1,
      postorderStart,
      postorderStart + inorderRoootIndex - inorderStart - 1
    );
    root.right = buildTreeHelper(
      inorderRoootIndex + 1,
      inorderEnd,
      postorderStart + inorderRoootIndex - inorderStart,
      postorderEnd - 1
    );

    return root;
  }

  return buildTreeHelper(0, inorder.length - 1, 0, postorder.length - 1);
}
