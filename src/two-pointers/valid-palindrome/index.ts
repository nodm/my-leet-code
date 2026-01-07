function isPalindrome(s: string): boolean {
  /**
   * Solution 1
   * */
  // const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // return cleanString.split('').reverse().join('') === cleanString;

  /**
   * Solution 2
   * */
  // const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // let i = 0;
  // let j = cleanString.length - 1;
  // while (i < j) {
  //   if (cleanString[i] !== cleanString[j]) {
  //     return false;
  //   }
  //   i += 1;
  //   j -= 1;
  // }

  // return true;

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

  /**
   * solution 4 (should be the most performant and memory efficient)
   */
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric from left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    // Skip non-alphanumeric from right
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters (case-insensitive)
    if (toLowerCase(s[left]) !== toLowerCase(s[right])) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char: string) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

function toLowerCase(char: string) {
  const code = char.charCodeAt(0);
  // If uppercase letter, convert to lowercase
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(code + 32);
  }
  return char;
}

export default isPalindrome;
