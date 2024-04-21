/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import {ListNode} from '../list-node';
/**
 * Iterative solution
 */
export function reverseListIterative(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let node = head;
  let previousNode = null;

  while (node?.next) {
    const nextNode = node.next;

    node.next = previousNode;
    previousNode = node;
    node = nextNode;
  }

  node.next = previousNode;

  return node;
}

/**
 * Recursive solution
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const reversed = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reversed;
}
