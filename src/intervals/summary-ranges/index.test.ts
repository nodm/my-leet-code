import {summaryRanges} from './index';

describe('summaryRanges', () => {
  test.each([
    [
      [0, 1, 2, 4, 5, 7],
      ['0->2', '4->5', '7'],
    ],
    [
      [0, 2, 3, 4, 6, 8, 9],
      ['0', '2->4', '6', '8->9'],
    ],
    [[], []],
    [[-1], ['-1']],
    [[0], ['0']],
  ])('summaryRanges(%p) should return %p', (nums, expected) => {
    expect(summaryRanges(nums)).toEqual(expected);
  });
});
