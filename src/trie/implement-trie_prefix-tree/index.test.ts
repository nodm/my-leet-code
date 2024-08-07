import {Trie} from '.';

describe('Trie', () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should insert and search a word correctly', () => {
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.search('banana')).toBe(false);
  });

  it('should insert and search multiple words correctly', () => {
    trie.insert('apple');
    trie.insert('banana');
    trie.insert('cat');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('banana')).toBe(true);
    expect(trie.search('cat')).toBe(true);
    expect(trie.search('dog')).toBe(false);
  });

  it('should handle prefix search correctly', () => {
    trie.insert('apple');
    trie.insert('banana');
    trie.insert('cat');
    expect(trie.startsWith('a')).toBe(true);
    expect(trie.startsWith('b')).toBe(true);
    expect(trie.startsWith('c')).toBe(true);
    expect(trie.startsWith('d')).toBe(false);
  });
});
