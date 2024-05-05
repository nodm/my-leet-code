function fizzBuzz(n: number): string[] {
  const answer = Array.from<string>({length: n});

  for (let i = 1; i <= n; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

    answer[i - 1] = result || i.toString();
  }

  return answer;
}

export default fizzBuzz;
