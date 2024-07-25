class DLListNode {
  public prev: DLListNode | null = null;
  public next: DLListNode | null = null;

  constructor(
    public key = 0,
    public value = 0
  ) {}
}

export class LRUCache {
  private cache = new Map<number, DLListNode>();
  private readonly head = new DLListNode();
  private readonly tail = new DLListNode();

  constructor(private capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key)!;

    // Move the accessed node to the front (head) of the list
    this.moveToHead(node);

    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key);

    if (node) {
      // Update the value and move the node to the front (head)
      node.value = value;
      this.moveToHead(node);
    } else {
      // Create a new node
      const newNode = new DLListNode(key, value);
      this.cache.set(key, newNode);
      this.addNode(newNode);

      if (this.cache.size > this.capacity) {
        // Pop the least recently used node from the list
        const tail = this.popTail();

        if (tail) this.cache.delete(tail.key);
      }
    }
  }

  private addNode(node: DLListNode): void {
    node.prev = this.head;
    node.next = this.head.next;

    if (this.head.next) {
      this.head.next.prev = node;
    }
    this.head.next = node;
  }

  private removeNode(node: DLListNode): void {
    const prev = node.prev;
    const next = node.next;

    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }

  private moveToHead(node: DLListNode): void {
    this.removeNode(node);
    this.addNode(node);
  }

  private popTail(): DLListNode | null {
    const res = this.tail.prev;

    if (res === this.head) return null;

    if (res) this.removeNode(res);

    return res;
  }
}
