export function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  const maxPossibleIndex = haystack.length - needle.length;
  let i = 0;

  while (i <= maxPossibleIndex) {
    let j = 0;
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j += 1;
    }

    if (j === needle.length) {
      return i;
    }

    i += 1;
  }

  return -1;
}
