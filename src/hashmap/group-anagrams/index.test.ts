import {groupAnagrams} from './index';

describe('groupAnagrams', () => {
  it('should group anagrams together', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
    const result = groupAnagrams(strs).map(group => group.sort());
    // Sort the outer array for consistent comparison
    result.sort((a, b) => a[0].localeCompare(b[0]));
    expect(result).toEqual(expected.sort((a, b) => a[0].localeCompare(b[0])));
  });

  it('should return empty array for empty input', () => {
    const strs: string[] = [];
    const expected: string[][] = [];
    const result = groupAnagrams(strs);
    expect(result).toEqual(expected);
  });

  it('should handle single character strings', () => {
    const strs = ['a', 'b', 'c', 'a'];
    const expected = [['a', 'a'], ['b'], ['c']];
    const result = groupAnagrams(strs).map(group => group.sort());
    // Sort the outer array for consistent comparison
    result.sort((a, b) => a[0].localeCompare(b[0]));
    expect(result).toEqual(expected.sort((a, b) => a[0].localeCompare(b[0])));
  });
});
