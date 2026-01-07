function countPrimes(n: number): number {
  if (n <= 1) return 0;

  const isPrime = new Array(n + 1).fill(true);

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(
    (isPrimeNumber, num) => isPrimeNumber && num > 1 && num < n,
  ).length;
}

export default countPrimes;
