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

// export function isPalindrome(head: ListNode | null): boolean {
//   if (!head) return false;

//   let node: ListNode | null = head;
//   const values: number[] = [];

//   while (node) {
//     values.push(node.val);
//     node = node.next;
//   }

//   const midIndex = values.length / 2;
//   for (let i = 0; i < midIndex; i += 1) {
//     if (values[i] !== values[values.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

function findMiddle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const reversedHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reversedHead;
}

export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return false;
  if (head.next === null) return true;

  const middle = findMiddle(head);
  const reversed = reverseList(middle);

  let firstHalf = head;
  let secondHalf = reversed;
  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) return false;

    firstHalf = firstHalf.next!;
    secondHalf = secondHalf.next;
  }

  return true;
}
