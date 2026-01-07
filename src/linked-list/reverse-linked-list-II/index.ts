import {ListNode} from '../list-node';

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  if (head === null || left === right) return head;

  const dummy = new ListNode(0);
  dummy.next = head;

  let prev: ListNode | null = dummy;

  // 1. Reach the node just before the left position
  for (let i = 1; i < left; i += 1) {
    if (prev) prev = prev.next;
  }

  // prev now points to the node just before the left position
  const curr = prev?.next;
  let next: ListNode | null = null;

  // 2. Reverse the sub-list from left to right
  for (let i = 0; i < right - left; i += 1) {
    next = curr?.next ?? null;

    if (curr && next) {
      curr.next = next.next;
      next.next = prev?.next ?? null;
      if (prev) prev.next = next;
    }
  }

  return dummy.next;
}
