import {reverseString} from './index';

describe('Reverse String', () => {
  test('should reverse ["h","e","l","l","o"] to ["o","l","l","e","h"]', () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
  });
});
