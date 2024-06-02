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

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let current;
  let mergedList: ListNode;

  if (list1.val <= list2.val) {
    mergedList = list1;
    current = mergedList;
    list1 = list1.next;
  } else {
    mergedList = list2;
    current = list2;
    list2 = list2.next;
  }

  while (list1 || list2) {
    if (!list1) {
      current.next = list2;
      break;
    }

    if (!list2) {
      current.next = list1;
      break;
    }

    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next!;
    }

    current = current.next;
  }

  return mergedList;
}
