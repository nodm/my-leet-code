/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
export function getFirstBadVersion(isBadVersion: (version: number) => boolean) {
  return function findBadVersion(n: number): number {
    let left = 1; // Start of the search range
    let right = n; // End of the search range

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2); // Calculate the middle version

      if (isBadVersion(mid)) {
        right = mid; // Move the right boundary to mid
      } else {
        left = mid + 1; // Move the left boundary to mid + 1
      }
    }

    return left; // Left boundary is the first bad version
  };
}

export default getFirstBadVersion;
