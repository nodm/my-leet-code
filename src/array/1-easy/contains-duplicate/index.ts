function containsDuplicate(nums: number[]): boolean {
  const a = new Set<number>();

  for (const n of nums) {
    if (a.has(n)) {
      return true;
    }
    a.add(n);
  }

  return false;
}

export default containsDuplicate;
