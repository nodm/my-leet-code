import {ListNode} from '../list-node';

export function partition(head: ListNode | null, x: number): ListNode | null {
  const lessThenList = new ListNode(0);
  const notLessThenList = new ListNode(0);
  let currentLess = lessThenList;
  let currentNotLess = notLessThenList;
  let current = head;

  while (current) {
    if (current.val < x) {
      currentLess.next = current;
      currentLess = currentLess.next;
    } else {
      currentNotLess.next = current;
      currentNotLess = currentNotLess.next;
    }
    current = current.next;
  }

  currentNotLess.next = null;
  currentLess.next = notLessThenList.next;

  return lessThenList.next;
}
