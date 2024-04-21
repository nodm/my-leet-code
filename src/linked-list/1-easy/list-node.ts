export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Helper function to create a linked list from an array
export function createLinkedList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (let i = 0; i < values.length; i++) {
    const newNode: ListNode = {val: values[i], next: null};

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail!.next = newNode;
      tail = newNode;
    }
  }

  return head;
}

// Helper function to convert a linked list to an array
export function convertLinkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];

  let node = head;
  while (node) {
    result.push(node.val);
    node = node.next;
  }

  return result;
}
