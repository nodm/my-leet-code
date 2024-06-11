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

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;

  let length = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length += 1;
  }

  tail.next = head;

  const shift = k % length;
  const newTailIndex = length - shift;

  let newTail = head;
  for (let i = 1; i < newTailIndex; i++) {
    newTail = newTail.next!;
  }
  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
