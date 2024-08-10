import {findPeakElement} from '.';

describe('findPeakElement', () => {
  test('findPeakElement should return the index of the peak element', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toBe(5);
    expect(findPeakElement([1, 2, 3, 4, 5])).toBe(4);
  });

  test('findPeakElement should return the index of the peak element in a single element array', () => {
    expect(findPeakElement([1])).toBe(0);
  });

  test('findPeakElement should return the index of the peak element in a two element array', () => {
    expect(findPeakElement([1, 2])).toBe(1);
    expect(findPeakElement([2, 1])).toBe(0);
  });
});
