import {ListNode} from '../list-node';

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;

  const deduplicated = new ListNode();
  deduplicated.next = head;

  let previous = deduplicated;
  let current = head;

  while (current !== null) {
    if (current.next !== null && current.val === current.next.val) {
      while (current.next !== null && current.val === current.next.val) {
        current = current.next;
      }

      previous.next = current.next;
    } else {
      previous = current;
    }

    current = current.next!;
  }

  return deduplicated.next;
}
