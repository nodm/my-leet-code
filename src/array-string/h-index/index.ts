export function hIndex(citations: number[]): number {
  /**
   * Memory optimized
   * Time complexity: O(n * log n)
   * Space complexity: O(1)
   */
  // citations.sort((a, b) => a - b);

  // let h = 0;

  // for (let i = 0; i < citations.length; i++) {
  //   const hIndex = Math.min(citations[i], citations.length - i);
  //   h = Math.max(h, hIndex);
  // }

  // return h;

  /**
   * Speed optimized
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  const n = citations.length;
  const papers = new Array(n + 1).fill(0);

  for (const c of citations) {
    papers[Math.min(c, n)] += 1;
  }

  let h = n;
  for (let s = papers[n]; h > s; s += papers[h]) {
    h -= 1;
  }

  return h;
}
