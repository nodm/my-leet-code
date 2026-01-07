import {addTwoNumbers} from './index';
import {createLinkedList, convertLinkedListToArray} from '../list-node';

describe('addTwoNumbers', () => {
  test.each([
    [
      [2, 4, 3],
      [5, 6, 4],
      [7, 0, 8],
    ],
    [[0], [0], [0]],
    [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
      [8, 9, 9, 9, 0, 0, 0, 1],
    ],
  ])('%# | addTwoNumbers(%o, %o) should return %o', (l1, l2, expected) => {
    expect(
      convertLinkedListToArray(
        addTwoNumbers(createLinkedList(l1), createLinkedList(l2)),
      ),
    ).toEqual(expected);
  });
});
