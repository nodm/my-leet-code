export function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev = 1;
  let curr = 2;
  let i = 3;

  while (i <= n) {
    const next = curr + prev;
    prev = curr;
    curr = next;
    i += 1;
  }

  return curr;
}

export default climbStairs;
