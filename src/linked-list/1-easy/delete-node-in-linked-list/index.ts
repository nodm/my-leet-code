import {ListNode} from '../list-node';

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  if (node === null) return;

  node.val = node.next!.val;
  node.next = node.next!.next;
}

export default deleteNode;
