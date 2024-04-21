import {createLinkedList, convertLinkedListToArray} from '../list-node';
import {reverseList} from './index';

describe('reverseList', () => {
  it('should reverse a singly-linked list', () => {
    // Create a sample linked list
    const head = createLinkedList([1, 2, 3, 4, 5]);

    // Reverse the linked list
    const reversedList = reverseList(head);

    // Convert the reversed linked list to an array
    const result = convertLinkedListToArray(reversedList);

    // Assert the result
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
