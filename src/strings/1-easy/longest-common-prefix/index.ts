function longestCommonPrefix(strs: string[]): string {
  let i = 0;

  while (!strs.some(str => str.length === i || str[i] !== strs[0][i])) {
    i += 1;
  }

  return strs[0].substring(0, i);
}

export default longestCommonPrefix;
