import {TreeNode} from '../TreeNode';

/**
  Time complexity O(n^2)
 */
export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (preorder.length === 0) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  const rootIndex = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

/**
  Time complexity O(n)
 */
export function buildTreeOpt(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  const inorderMap = new Map<number, number>();

  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  return buildTreeHelper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    inorderMap,
  );
}

function buildTreeHelper(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number,
  inorderMap: Map<number, number>,
): TreeNode | null {
  if (preStart > preEnd) return null;

  const rootVal = preorder[preStart];
  const root = new TreeNode(rootVal);

  const rootIndex = inorderMap.get(rootVal)!;
  const leftSize = rootIndex - inStart;

  root.left = buildTreeHelper(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    rootIndex - 1,
    inorderMap,
  );
  root.right = buildTreeHelper(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    rootIndex + 1,
    inEnd,
    inorderMap,
  );

  return root;
}
