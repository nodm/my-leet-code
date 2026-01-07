import {permute} from '.';

describe('permutations', () => {
  it('should return the input array itself if it contains only one element', () => {
    const nums: number[] = [5];
    const result = permute(nums);
    expect(result).toEqual([[5]]);
  });

  it('should return all possible permutations of the input array', () => {
    const nums: number[] = [1, 2, 3];
    const result = permute(nums);
    expect(result).toHaveLength(6);
    expect(result).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ])
    );
  });
});
