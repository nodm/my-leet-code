/*
Time Complexity: `O(n)`, where n is the number of intervals. Each interval is processed at most once.
Space Complexity: `O(n)` for storing the result list.
*/
export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  const n = intervals.length;
  const result: number[][] = [];
  let i = 0;

  // Add all the intervals that come before the new interval
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i += 1;
  }

  // Merge all the overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i += 1;
  }

  result.push(newInterval);

  // Add all the intervals that come after the new interval
  while (i < n) {
    result.push(intervals[i]);
    i += 1;
  }

  return result;
}
