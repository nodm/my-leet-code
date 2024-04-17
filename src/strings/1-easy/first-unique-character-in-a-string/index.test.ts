import {firstUniqChar} from './index';

describe('First Unique Character in a String', () => {
  test('should return 0 for "leetcode"', () => {
    expect(firstUniqChar('leetcode')).toBe(0);
  });

  test('should return 2 for "loveleetcode"', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2);
  });

  test('should return -1 for "aabb"', () => {
    expect(firstUniqChar('aabb')).toBe(-1);
  });
});
