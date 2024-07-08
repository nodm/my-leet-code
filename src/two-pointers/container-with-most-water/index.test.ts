import {maxArea} from './index';

describe('maxArea', () => {
  test.each([
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[4, 3, 2, 1, 4], 16],
    [[1, 2, 1], 2],
    [[1, 1], 1],
  ])(
    'for a given height array %s should return the maximum area %s',
    (height, expected) => {
      expect(maxArea(height)).toBe(expected);
    }
  );
});
