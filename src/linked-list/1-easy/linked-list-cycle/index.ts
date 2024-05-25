import {ListNode} from '../list-node';

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

export default hasCycle;
