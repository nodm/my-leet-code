import {findMinArrowShots} from './index';
describe('findMinArrowShots', () => {
  it('returns the minimum number of arrows needed to burst all balloons', () => {
    // Test case 1
    expect(
      findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
      ]),
    ).toBe(2);

    // Test case 2
    expect(
      findMinArrowShots([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]),
    ).toBe(4);

    // Test case 3
    expect(
      findMinArrowShots([
        [1, 10],
        [2, 9],
        [3, 8],
        [4, 7],
      ]),
    ).toBe(1);

    // Test case 4
    expect(
      findMinArrowShots([
        [1, 5],
        [2, 4],
        [3, 6],
        [7, 8],
      ]),
    ).toBe(2);
  });
});
