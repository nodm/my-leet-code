function generate(numRows: number): number[][] {
  const pascalsTriangle: number[][] = Array.from({length: numRows}, (_, i) =>
    Array.from({length: i + 1}, () => 1)
  );

  for (let i = 0; i < numRows; i += 1) {
    for (let j = 1; j < i; j += 1) {
      pascalsTriangle[i][j] =
        (pascalsTriangle[i - 1]?.[j - 1] ?? 0) +
        (pascalsTriangle[i - 1]?.[j] ?? 0);
    }
  }

  /**
   * Sometimes this code runs faster than the previous one.
   */
  // const pascalsTriangle: number[][] = [];

  // for (let i = 0; i < numRows; i += 1) {
  //   const row = [];
  //   row[0] = 1;
  //   row[i] = 1;

  //   for (let j = 1; j < i; j += 1) {
  //     row[j] =
  //       (pascalsTriangle[i - 1]?.[j - 1] ?? 0) +
  //       (pascalsTriangle[i - 1]?.[j] ?? 0);
  //   }
  //   pascalsTriangle.push(row);
  // }

  return pascalsTriangle;
}

export default generate;
