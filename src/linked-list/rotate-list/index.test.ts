import {convertLinkedListToArray, createLinkedList} from '../list-node';
import {rotateRight} from './index';

describe('rotateRight()', () => {
  test.each([
    [null, 0, []],
    [null, 1, []],
    [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
    [[0, 1, 2], 4, [2, 0, 1]],
    [[1, 2, 3, 4, 5], 5, [1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5], 10, [1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5], 0, [1, 2, 3, 4, 5]],
  ])('should ', (head, k, expected) => {
    expect(
      convertLinkedListToArray(
        rotateRight(head ? createLinkedList(head) : null, k),
      ),
    ).toEqual(expected);
  });
});
