import { createTree, type TreeNode } from "../TreeNode";
import { invertTree } from "./index";

describe("invertTree", () => {
	function treeToArray(root: TreeNode | null): (number | null)[] {
		if (!root) return [];
		const result: (number | null)[] = [];
		const queue: (TreeNode | null)[] = [root];
		while (queue.length) {
			const node = queue.shift();
			if (node) {
				result.push(node.val);
				queue.push(node.left, node.right);
			} else {
				result.push(null);
			}
		}
		// Remove trailing nulls
		while (result[result.length - 1] === null) result.pop();
		return result;
	}

	it("inverts a complete binary tree", () => {
		const root = createTree([4, 2, 7, 1, 3, 6, 9]);
		const inverted = invertTree(root);
		expect(treeToArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
	});

	it("inverts a single node", () => {
		const root = createTree([1]);
		const inverted = invertTree(root);
		expect(treeToArray(inverted)).toEqual([1]);
	});

	it("inverts an empty tree", () => {
		const inverted = invertTree(null);
		expect(inverted).toBeNull();
	});

	it("inverts a left-skewed tree", () => {
		const root = createTree([1, 2, null, 3]);
		const inverted = invertTree(root);
		expect(treeToArray(inverted)).toEqual([1, null, 2, null, 3]);
	});

	it("inverts a right-skewed tree", () => {
		const root = createTree([1, null, 2, null, 3]);
		const inverted = invertTree(root);
		expect(treeToArray(inverted)).toEqual([1, 2]);
	});
});
