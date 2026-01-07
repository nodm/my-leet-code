import {createTree} from '../TreeNode';
import {isValidBST} from './index';

describe('Testing "isValidBST" function', () => {
  test.each([
    [[2, 1, 3], true],
    [[1, 1], false],
    [[2, 2, 2], false],
    [[5, 1, 4, null, null, 3, 6], false],
    [[5, 4, 6, null, null, 3, 7], false],
  ])(
    'should for "%o" return "%s"',
    (treeValues: (number | null)[], expectedResult: boolean) => {
      const tree = createTree(treeValues);
      console.log(tree);

      expect(isValidBST(tree)).toBe(expectedResult);
    },
  );
});
