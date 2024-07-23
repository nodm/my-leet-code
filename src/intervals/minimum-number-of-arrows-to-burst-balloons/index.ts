/*
 Time Complexity: `O(n * log n)` due to the sorting step, where `n` is the number of intervals.
 Space Complexity: `O(1)` for the in-place operations and variables used.
*/
export function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0;

  points.sort((a, b) => a[1] - b[1]); // Sort points by their end coordinates

  let count = 1; // At least one arrow is needed
  let currentEnd = points[0][1];

  for (let i = 1; i < points.length; i += 1) {
    if (points[i][0] > currentEnd) {
      // If the start of the current balloon is greater than the end of the last arrow shot
      count += 1;
      currentEnd = points[i][1];
    }
  }

  return count;
}
