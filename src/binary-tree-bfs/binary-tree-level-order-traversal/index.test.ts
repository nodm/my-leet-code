import { TreeNode } from "../TreeNode";
import { levelOrder } from ".";

describe("levelOrder", () => {
	it("should return an empty array for an empty tree", () => {
		const root = null;
		const expected: number[][] = [];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should return a single level for a tree with only root node", () => {
		const root = new TreeNode(1);
		const expected = [[1]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should return the level order traversal of a binary tree", () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(9);
		root.right = new TreeNode(20);
		root.right.left = new TreeNode(15);
		root.right.right = new TreeNode(7);

		const expected = [[3], [9, 20], [15, 7]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should handle a left-skewed tree", () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.left.left = new TreeNode(3);
		root.left.left.left = new TreeNode(4);

		const expected = [[1], [2], [3], [4]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should handle a right-skewed tree", () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(2);
		root.right.right = new TreeNode(3);
		root.right.right.right = new TreeNode(4);

		const expected = [[1], [2], [3], [4]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should handle a complete binary tree", () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(4);
		root.left.right = new TreeNode(5);
		root.right.left = new TreeNode(6);
		root.right.right = new TreeNode(7);

		const expected = [[1], [2, 3], [4, 5, 6, 7]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should handle a tree with unbalanced branches", () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(4);
		root.left.right = new TreeNode(5);
		root.left.left.left = new TreeNode(6);

		const expected = [[1], [2, 3], [4, 5], [6]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should handle negative values", () => {
		const root = new TreeNode(-10);
		root.left = new TreeNode(9);
		root.right = new TreeNode(20);
		root.right.left = new TreeNode(15);
		root.right.right = new TreeNode(7);

		const expected = [[-10], [9, 20], [15, 7]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});

	it("should handle a tree with duplicate values", () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(1);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(1);

		const expected = [[1], [1, 1], [1]];
		const result = levelOrder(root);
		expect(result).toEqual(expected);
	});
});
