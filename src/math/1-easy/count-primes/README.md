# Count Primes

Given an integer `n`, return __the number of prime numbers that are strictly less than `n`__.

**Example 1:**
```
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

**Example 2:**
```
Input: n = 0
Output: 0
```

**Example 3:**
```
Input: n = 1
Output: 0
```

**Constraints:**
* `0 <= n <= 5 * 106`


__Hint 1__ Checking all the integers in the range [1, n - 1] is not efficient. Think about a better approach.

__Hint 2__ Since most of the numbers are not primes, we need a fast approach to exclude the non-prime integers.

__Hint 3__ Use Sieve of Eratosthenes.