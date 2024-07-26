/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export function connect(root: _Node | null): _Node | null {
  if (!root) return null;

  let current: _Node | null = root;
  const dummy = new _Node(0);
  let tail: _Node | null = dummy;

  while (current) {
    if (current.left) {
      tail.next = current.left;
      tail = tail.next;
    }
    if (current.right) {
      tail.next = current.right;
      tail = tail.next;
    }
    current = current.next;

    if (!current) {
      current = dummy.next;
      dummy.next = null;
      tail = dummy;
    }
  }

  return root;
}
