import {findWords} from '.';

describe('findWords', () => {
  it('should return an empty array if the board is empty', () => {
    const board: string[][] = [];
    const words: string[] = ['apple', 'banana', 'cherry'];
    const result = findWords(board, words);
    expect(result).toEqual([]);
  });

  it('should return an empty array if no words are found', () => {
    const board: string[][] = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i'],
    ];
    const words: string[] = ['apple', 'banana', 'cherry'];
    const result = findWords(board, words);
    expect(result).toEqual([]);
  });

  it('should return the found words in the board', () => {
    const board: string[][] = [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ];
    const words: string[] = ['oath', 'pea', 'eat', 'rain'];
    const result = findWords(board, words);
    expect(result).toEqual(['oath', 'eat']);
  });
});
