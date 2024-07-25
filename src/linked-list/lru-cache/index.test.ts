import {LRUCache} from './index';

describe('LRUCache', () => {
  it('should get the value from the cache', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
  });

  it('should return -1 for non-existent key', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(3)).toBe(-1);
  });

  it('should update the value for an existing key', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10);
    expect(cache.get(1)).toBe(10);
  });

  it('should evict the least recently used item when capacity is exceeded', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.get(1)).toBe(-1);
  });
});
