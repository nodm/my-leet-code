function isPalindrome(s: string): boolean {
  /**
   * Solution 1
   * */
  // const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // return cleanString.split('').reverse().join('') === cleanString;

  /**
   * Solution 2
   * */
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let i = 0;
  let j = cleanString.length - 1;
  while (i < j) {
    if (cleanString[i] !== cleanString[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;

  /**
   * Solution 3
   * */
  // let i = 0;
  // let j = s.length - 1;
  // while (i < j) {
  //   if (!/[a-zA-Z0-9]/.test(s[i])) {
  //     i += 1;
  //     continue;
  //   }

  //   if (!/[a-zA-Z0-9]/.test(s[j])) {
  //     j -= 1;
  //     continue;
  //   }

  //   if (s[i].toLocaleLowerCase() !== s[j].toLocaleLowerCase()) {
  //     return false;
  //   }

  //   i += 1;
  //   j -= 1;
  // }

  // return true;
}

export default isPalindrome;
