class TrieNode {
  public children = new Map<string, TrieNode>();
  public isEnd = false;

  constructor() {}
}

/**
 * Time Complexity:
 *   - insert: O(m), where m is the length of the word.
 *   - search: O(m), where m is the length of the word.
 *   - startsWith: O(m), where m is the length of the prefix.
 * Space Complexity:
 *   The space complexity is dependent on the number of words
 *   inserted and their lengths. In the worst case, each node
 *   might have multiple children, leading to O(N×M) space
 *   usage, where N is the number of words and M is the average
 *   length of the words.
 */
export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
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
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) return false;

      node = node.children.get(char)!;
    }

    return node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children.has(char)) return false;

      node = node.children.get(char)!;
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
