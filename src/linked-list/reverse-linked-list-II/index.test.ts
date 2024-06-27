import {createLinkedList, convertLinkedListToArray} from '../list-node';
import {reverseBetween} from './index';
describe('reverseBetween()', () => {
  test.each([
    [[1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]],
    [[5], 1, 1, [5]],
    [[3, 5], 1, 2, [5, 3]],
    [[1, 2, 3, 4, 5], 1, 5, [5, 4, 3, 2, 1]],
  ])('reverseBetween(%j, %i, %i) should return %j', (a, b, c, expected) => {
    expect(
      convertLinkedListToArray(reverseBetween(createLinkedList(a), b, c))
    ).toStrictEqual(expected);
  });
});
