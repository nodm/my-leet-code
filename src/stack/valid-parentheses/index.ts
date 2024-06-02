const bracketMap = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
]);

function isValid(s: string): boolean {
  const stack = [];

  for (const char of s) {
    if (bracketMap.has(char)) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (bracketMap.get(last!) !== char) {
        return false;
      }
    }
  }

  return !stack.length;
}

export default isValid;
