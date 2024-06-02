import merge from './index';

describe('Testing "merge"', () => {
  test.each([
    {
      num1: [1, 2, 3, 0, 0, 0],
      m: 3,
      num2: [2, 5, 6],
      n: 3,
      expected: [1, 2, 2, 3, 5, 6],
    },
    {num1: [1], m: 1, num2: [], n: 0, expected: [1]},
    {num1: [0], m: 0, num2: [1], n: 1, expected: [1]},
    {
      num1: [4, 5, 6, 7, 9, 0, 0, 0, 0, 0],
      m: 5,
      num2: [1, 2, 4, 4, 8],
      n: 5,
      expected: [1, 2, 4, 4, 4, 5, 6, 7, 8, 9],
    },
  ])(
    'should return $expected for the $num1 of length $n and $num2 of length $m',
    ({num1, m, num2, n, expected}) => {
      merge(num1, m, num2, n);
      expect(num1).toEqual(expected);
    }
  );
});
