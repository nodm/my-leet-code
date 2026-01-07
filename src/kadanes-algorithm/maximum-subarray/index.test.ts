import maxSubarray from './index';

describe('Testing "minSubarray"', () => {
  test.each([
    {input: [1], expected: 1},
    {input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6},
    {input: [5, 4, -1, 7, 8], expected: 23},
    {input: [-6, -1, -2, -3, -4, -5], expected: -1},
  ])(
    'should return $expected for $input',
    ({input, expected}: {input: number[]; expected: number}) => {
      expect(maxSubarray(input)).toBe(expected);
    },
  );
});
