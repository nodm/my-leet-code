export function lengthOfLongestSubstring(s: string): number {
  // Brute force
    // let maxLength = s.length > 0 ? 1 : 0;

    // for (let i = 0; i < s.length - 1; i += 1) {
    //     let subString = s[i];

    //     for (let j = i + 1; j < s.length; j += 1) {
    //         if (subString.includes(s[j])) {
    //             break;
    //         } else {
    //             subString = subString.concat(s[j]);
    //         }
    //     }

    //     if (subString.length > maxLength) {
    //         maxLength = subString.length;
    //     }
    // }

    // return maxLength;


    let maxLength = 0;
    let start = 0;
    const charMap = new Map<string, number>();

    for (let end = 0; end < s.length; end += 1) {
      const char = s[end];
      const index = charMap.get(char);

      if (index !== undefined && index >= start) {
        start = index + 1;
      }

      charMap.set(char, end);
      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};