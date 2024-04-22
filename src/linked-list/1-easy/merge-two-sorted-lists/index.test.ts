import {createLinkedList, convertLinkedListToArray} from '../list-node';
import {mergeTwoLists} from './index';

describe('Testing "mergeTwoLists" function', () => {
  it.each([
    [[], [], []],
    [[], [0], [0]],
    [[1], [2], [1, 2]],
    [[2], [1], [1, 2]],
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4],
    ],
  ])(
    'should merge two sorted lists',
    (list1: number[], list2: number[], expected: number[]) => {
      expect(
        convertLinkedListToArray(
          mergeTwoLists(createLinkedList(list1), createLinkedList(list2))
        )
      ).toEqual(expected);
    }
  );
});
