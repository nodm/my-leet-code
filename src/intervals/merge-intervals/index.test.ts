import {merge} from './index';
describe('merge', () => {
  it('should merge overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const merged = merge(intervals);
    expect(merged).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('should merge intervals with no overlap', () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const merged = merge(intervals);
    expect(merged).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);
  });

  it('should merge intervals with partial overlap', () => {
    const intervals = [
      [1, 4],
      [2, 5],
      [6, 8],
      [7, 9],
    ];
    const merged = merge(intervals);
    expect(merged).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  it('should merge intervals with single interval', () => {
    const intervals = [[1, 4]];
    const merged = merge(intervals);
    expect(merged).toEqual([[1, 4]]);
  });

  it('should merge empty intervals', () => {
    const intervals: number[][] = [];
    const merged = merge(intervals);
    expect(merged).toEqual([]);
  });
});
