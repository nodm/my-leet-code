import {WordDictionary} from '.';

describe('WordDictionary', () => {
  let wordDictionary: WordDictionary;

  beforeEach(() => {
    wordDictionary = new WordDictionary();
  });

  it('should add and search words correctly', () => {
    wordDictionary.addWord('hello');
    wordDictionary.addWord('world');

    expect(wordDictionary.search('hello')).toBe(true);
    expect(wordDictionary.search('world')).toBe(true);
    expect(wordDictionary.search('leetcode')).toBe(false);
  });

  it('should handle wildcard search correctly', () => {
    wordDictionary.addWord('apple');
    wordDictionary.addWord('banana');
    wordDictionary.addWord('cherry');

    expect(wordDictionary.search('a..le')).toBe(true);
    expect(wordDictionary.search('b.n.n.')).toBe(true);
    expect(wordDictionary.search('c..rry')).toBe(true);
    expect(wordDictionary.search('d...y')).toBe(false);
  });
});
