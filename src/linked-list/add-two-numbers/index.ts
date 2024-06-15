import {ListNode} from '../list-node';

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  const sum = new ListNode(0);
  let tail = sum;

  let a: ListNode | null = l1;
  let b: ListNode | null = l2;
  let carry = 0;

  while (a !== null || b !== null || carry !== 0) {
    const s = (a?.val ?? 0) + (b?.val ?? 0) + carry;

    carry = s < 10 ? 0 : 1;

    tail.next = new ListNode(s % 10);
    tail = tail.next;

    a = a?.next ?? null;
    b = b?.next ?? null;
  }

  return sum.next;
}
