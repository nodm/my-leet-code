export function searchRange(nums: number[], target: number): number[] {
  const findFirstPosition = (): number => {
    let left = 0;
    let right = nums.length - 1;
    let firstPosition = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        firstPosition = mid;
        right = mid - 1; // Look on the left side
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return firstPosition;
  };

  const findLastPosition = (): number => {
    let left = 0;
    let right = nums.length - 1;
    let lastPosition = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        lastPosition = mid;
        left = mid + 1; // Look on the right side
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return lastPosition;
  };

  const firstPosition = findFirstPosition();
  if (firstPosition === -1) {
    return [-1, -1]; // Target not found
  }

  const lastPosition = findLastPosition();
  return [firstPosition, lastPosition];
}
