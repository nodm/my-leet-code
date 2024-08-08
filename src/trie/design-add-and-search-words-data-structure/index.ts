class TrieNode {
  public children = new Map<string, TrieNode>();
  public isEnd = false;

  constructor() {}
}

/**
 * Time Complexity:
 *   - addWord: O(m), where m is the length of the word.
 *   - search: In the worst case, the complexity can be O(26^d * m),
 *     where d is the number of dots and m is the length of the word.
 * Space Complexity: The space complexity is dependent on the number
 *   of words inserted and their lengths, similar to a typical Trie.
 *   In the worst case, it can be O(N * M), where N is the number of
 *   words and M is the average length of the words.
 */
export class WordDictionary {
  private root: TrieNode = new TrieNode();

  constructor() {}

  addWord(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const searchInNode = (word: string, node: TrieNode) => {
      for (let i = 0; i < word.length; i += 1) {
        const char = word[i];

        if (char === '.') {
          for (const key of node.children.keys()) {
            if (searchInNode(word.substring(i + 1), node.children.get(key)!)) {
              return true;
            }
          }

          return false;
        } else {
          if (!node.children.has(char)) {
            return false;
          }
          node = node.children.get(char)!;
        }
      }

      return node.isEnd;
    };

    return searchInNode(word, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
