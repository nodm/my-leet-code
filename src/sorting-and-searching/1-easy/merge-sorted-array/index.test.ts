import {merge} from './index';

describe('Testing "merge"', () => {
  test.each([
    {
      num1: [1, 2, 3, 0, 0, 0],
      n: 3,
      num2: [2, 5, 6],
      m: 3,
      expected: [1, 2, 2, 3, 5, 6],
    },
    {num1: [0], n: 0, num2: [1], m: 1, expected: [1]},
  ])(
    'should return $expected for the $num1 of length $n and $num2 of length $m',
    ({num1, n, num2, m, expected}) => {
      merge(num1, n, num2, m);
      expect(num1).toEqual(expected);
    }
  );
});
