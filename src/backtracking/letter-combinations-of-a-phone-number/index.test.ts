import {letterCombinations} from './index';

describe('letterCombinations', () => {
  test.each([
    ['', []],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
    ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
  ])('digits = "%s"', (digits, expected) => {
    expect(letterCombinations(digits).sort()).toEqual(expected.sort());
  });
});
