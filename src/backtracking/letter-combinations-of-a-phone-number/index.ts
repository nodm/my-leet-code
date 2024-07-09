const keypadMap = new Map<string, string[]>([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
]);

export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const combinations: string[] = [''];

  // function backtrack(combination: string, nextDigits: string) {
  //   if (nextDigits.length === 0) {
  //     combinations.push(combination);
  //     return;
  //   }
  //   const letters = keypadMap.get(nextDigits[0])!;
  //   for (const letter of letters) {
  //     backtrack(combination + letter, nextDigits.slice(1));
  //   }
  // }
  // backtrack('', digits);

  for (const digit of digits) {
    const letters = keypadMap.get(digit)!;
    const temp: string[] = [];

    for (const combination of combinations) {
      for (const letter of letters) {
        temp.push(combination + letter);
      }
    }

    combinations.length = 0;
    combinations.push(...temp);
    console.log('>>>', digit, temp);
  }

  return combinations;
}
