import {longestConsecutive} from './index';
describe('longestConsecutive', () => {
  it('returns 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it('returns the correct length for a consecutive sequence', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
    expect(longestConsecutive([5, 4, 3, 2, 1])).toBe(5);
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
    expect(longestConsecutive([0, 1, 2, 3, 4])).toBe(5);
  });

  it('ignores duplicate numbers', () => {
    expect(longestConsecutive([1, 2, 2, 3, 3, 4, 5])).toBe(5);
    expect(longestConsecutive([1, 1, 1, 1, 1])).toBe(1);
  });

  it('handles negative numbers', () => {
    expect(longestConsecutive([-1, -2, -3, -4, -5])).toBe(5);
    expect(longestConsecutive([-5, -4, -3, -2, -1])).toBe(5);
    expect(longestConsecutive([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])).toBe(11);
  });
});
