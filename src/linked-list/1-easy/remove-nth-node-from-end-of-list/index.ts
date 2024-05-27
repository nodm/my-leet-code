import {ListNode} from '../list-node';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let current = head;

  let ahead = current;
  let i = 0;
  while (i < n - 1) {
    ahead = ahead!.next;
    i += 1;
  }

  let prev: ListNode | null = null;
  while (ahead!.next !== null) {
    prev = current!;
    current = current!.next;
    ahead = ahead!.next;
  }

  if (!prev) return current!.next;

  prev.next = current!.next;

  return head;
}

export default removeNthFromEnd;
