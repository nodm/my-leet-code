import {createLinkedList, convertLinkedListToArray} from '../list-node';
import removeNthFromEnd from './index';

describe('Testing "removeNthFromEnd" function', () => {
  test.each([
    [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    [[1], 1, []],
    [[1, 2], 1, [1]],
    [[1, 2], 2, [2]],
  ])(
    'should remove the nth node from the end of the list',
    (list: number[], n: number, expected: number[]) => {
      expect(
        convertLinkedListToArray(removeNthFromEnd(createLinkedList(list), n))
      ).toEqual(expected);
    }
  );
});
