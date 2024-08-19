export function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    heap.add(nums[i]);

    if (heap.size() > k) {
      heap.poll();
    }
  }

  return heap.peek();
}

class MinHeap {
  private heap: number[] = [];

  constructor() {}

  add(value: number) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll(): number {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }

    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end!;
      this.bubbleDown();
    }
    return min;
  }

  peek(): number {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }

    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  private bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild!)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      index = swap;
    }

    this.heap[index] = element;
  }
}
