import { search } from './index';

describe('Testing "search"', { timeout: 1_000 }, () => {
  test.each([
    // Example 1 from README
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 9,
      expected: 4,
      description: '9 exists in nums and its index is 4',
    },
    // Example 2 from README
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 2,
      expected: -1,
      description: '2 does not exist in nums so return -1',
    },
    // Edge case: single element (found)
    {
      nums: [5],
      target: 5,
      expected: 0,
      description: 'single element array, target found',
    },
    // Edge case: single element (not found)
    {
      nums: [5],
      target: 3,
      expected: -1,
      description: 'single element array, target not found',
    },
    // Target at the beginning
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: -1,
      expected: 0,
      description: 'target at the beginning of array',
    },
    // Target at the end
    {
      nums: [-1, 0, 3, 5, 9, 12],
      target: 12,
      expected: 5,
      description: 'target at the end of array',
    },
    // Two elements (found first)
    {
      nums: [1, 2],
      target: 1,
      expected: 0,
      description: 'two elements, target is first',
    },
    // Two elements (found second)
    {
      nums: [1, 2],
      target: 2,
      expected: 1,
      description: 'two elements, target is second',
    },
    // Two elements (not found)
    {
      nums: [1, 3],
      target: 2,
      expected: -1,
      description: 'two elements, target not found',
    },
    // Target in the middle
    {
      nums: [1, 2, 3, 4, 5, 6, 7],
      target: 4,
      expected: 3,
      description: 'target in the middle of array',
    },
    // Negative numbers
    {
      nums: [-10, -5, -3, 0, 5, 10],
      target: -5,
      expected: 1,
      description: 'negative target found',
    },
    // Large array
    {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      target: 13,
      expected: 12,
      description: 'large array with target found',
    },
  ])(
    'should return $expected when searching for $target in $nums ($description)',
    ({ nums, target, expected }) => {
      expect(search(nums, target)).toBe(expected);
    },
  );
});
