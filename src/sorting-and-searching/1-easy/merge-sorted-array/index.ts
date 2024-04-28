/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge1(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  if (n === 0) return;

  for (let i = 0; i < m; i += 1) {
    if (nums1[i] > nums2[0]) {
      swap(nums1, i, nums2, 0);

      /** reorder the second array */
      let j = 1;
      while (j < n && nums2[j] < nums2[j - 1]) {
        swap(nums2, j, nums2, j - 1);
        j += 1;
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    nums1[m + i] = nums2[i];
  }
}

function swap(nums1: number[], m: number, nums2: number[], n: number) {
  const temp = nums1[m];
  nums1[m] = nums2[n];
  nums2[n] = temp;
}

/**
 * O(n + m)
 */
export function merge2(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1; // last element's index in nums1
  let j = n - 1; // last element's index in nums2
  let k = m + n - 1; // last element's index of the merged array

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i -= 1;
    } else {
      nums1[k] = nums2[j];
      j -= 1;
    }
    k -= 1;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j -= 1;
    k -= 1;
  }
}

export default merge2;
