import {createLinkedList} from '../list-node';
import {isPalindrome} from './index';

describe('Testing "isPalindrome" function', () => {
  it('should return true for a palindrome linked list', () => {
    // Create a sample linked list
    const head = createLinkedList([1, 2, 3, 2, 1]);

    // Call the function
    const result = isPalindrome(head);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false for a non-palindrome linked list', () => {
    // Create a sample linked list
    const head = createLinkedList([1, 2, 3, 4, 5]);

    // Call the function
    const result = isPalindrome(head);

    // Assert
    expect(result).toBe(false);
  });
});
