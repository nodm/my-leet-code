import {calcEquation} from '.';

describe('calcEquation', () => {
  test.each([
    [
      [
        ['a', 'b'],
        ['b', 'c'],
      ],
      [2.0, 3.0],
      [
        ['a', 'c'],
        ['b', 'a'],
        ['a', 'e'],
        ['a', 'a'],
        ['x', 'x'],
      ],
      [6.0, 0.5, -1.0, 1.0, -1.0],
    ],
    [
      [
        ['a', 'b'],
        ['b', 'c'],
        ['bc', 'cd'],
      ],
      [1.5, 2.5, 5.0],
      [
        ['a', 'c'],
        ['c', 'b'],
        ['bc', 'cd'],
        ['cd', 'bc'],
      ],
      [3.75, 0.4, 5.0, 0.2],
    ],
    [
      [['a', 'b']],
      [0.5],
      [
        ['a', 'b'],
        ['b', 'a'],
        ['a', 'c'],
        ['x', 'y'],
      ],
      [0.5, 2.0, -1.0, -1.0],
    ],
  ])(
    '%# | calcEquation(%o, %o, %o) should return %o',
    (equations, values, queries, expected) => {
      expect(calcEquation(equations, values, queries)).toEqual(expected);
    },
  );
});
