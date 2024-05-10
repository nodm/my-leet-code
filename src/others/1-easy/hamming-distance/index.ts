function hammingDistance(x: number, y: number): number {
  let xorResult = x ^ y;
  let distance = 0;

  while (xorResult) {
    if (xorResult & 1) {
      distance += 1;
    }
    xorResult >>= 1;

    // The above code can be simplified as follows:
    // distance += 1;
    // xorResult &= xorResult - 1;
  }

  return distance;
}

export default hammingDistance;
