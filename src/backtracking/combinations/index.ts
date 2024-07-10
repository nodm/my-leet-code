export function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, combination: number[]) {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(1, []);

  return result;

  // const combinations: number[][] = [];
  // const queue: number[][] = Array.from({length: n}).map((_, i) => [i + 1]);

  // while (queue.length > 0) {
  //   const combination = queue.shift()!;

  //   if (combination.length === k) {
  //     combinations.push(combination);
  //   } else {
  //     const last = combination[combination.length - 1];

  //     for (let i = last + 1; i <= n; i++) {
  //       queue.push([...combination, i]);
  //     }
  //   }
  // }

  // return combinations;
}
