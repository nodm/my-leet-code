export function evalRPN(tokens: string[]): number {
  const operations = ['+', '-', '*', '/'];
  const stack: number[] = [];

  for (const token of tokens) {
    if (operations.includes(token)) {
      const b = stack.pop() ?? 0;
      const a = stack.pop() ?? 0;

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b));
          break;
      }
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack.pop() ?? 0;
}
