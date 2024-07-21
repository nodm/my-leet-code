/**
 * Merges overlapping intervals in a given array of intervals.
 * @param intervals - The array of intervals to be merged.
 * @returns The merged array of intervals.
 *
 * The time complexity of this solution is `O(n * log n)`, where `n` is the number of intervals.
 * The space complexity is `O(n)`.
 * `O(n * log n)` due to the sorting step.
 * The subsequent merging process runs in O(n) time, making the overall time complexity `O(n * log n)`.
 */
export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by their start value
  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i += 1) {
    const curr = intervals[i];
    const last = merged[merged.length - 1];

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
}
