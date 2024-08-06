import {minMutation} from '.';

describe('minMutation', () => {
  it('should return the minimum number of mutations required', () => {
    expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])).toBe(1);
    expect(
      minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])
    ).toBe(2);
    expect(
      minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'])
    ).toBe(3);
  });

  it('should return -1 if the end gene is not in the bank', () => {
    expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTC', 'AACCGGTT'])).toBe(
      -1
    );
  });
});
