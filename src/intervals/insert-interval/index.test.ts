import {insert} from './index';
describe('insert', () => {
  test.each([
    [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
      [
        [1, 5],
        [6, 9],
      ],
    ],
    [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
      [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    ],
  ])('%# should insert(%p, %p) = %p', (intervals, newInterval, expected) => {
    expect(insert(intervals, newInterval)).toEqual(expected);
  });
});
