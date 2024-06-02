import {createTree} from '../../TreeNode';
import isSymmetric from './index';

describe('Testing "isSymmetric"', () => {
  test.each([
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
  ])('for %s should return %s', (treeArray, expectedResult) => {
    const root = createTree(treeArray);

    expect(isSymmetric(root)).toBe(expectedResult);
  });
});
