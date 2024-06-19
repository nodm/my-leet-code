// hIndex.test.ts
import {hIndex} from './index';

describe('hIndex', () => {
  it('should return 0 for an empty array', () => {
    expect(hIndex([])).toBe(0);
  });

  it('should return the correct h-index for a single-element array', () => {
    expect(hIndex([100])).toBe(1);
    expect(hIndex([0])).toBe(0);
  });

  it('should return the correct h-index for a multi-element array', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
    expect(hIndex([1, 1, 1, 1])).toBe(1);
    expect(hIndex([0, 0, 0, 0])).toBe(0);
  });
});
