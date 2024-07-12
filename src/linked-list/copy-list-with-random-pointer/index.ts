class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function copyRandomList(head: _Node | null): _Node | null {
  if (head === null) return null;

  const map = new Map<_Node, _Node>();
  let curr: _Node | null = head;

  while (curr !== null) {
    map.set(curr, new _Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    map.get(curr)!.next = map.get(curr.next!) || null;
    map.get(curr)!.random = map.get(curr.random!) || null;
    curr = curr.next;
  }

  return map.get(head)!;
}
