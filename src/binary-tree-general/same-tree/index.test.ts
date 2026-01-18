import { describe, expect, it } from "vitest";
import { createTree, TreeNode } from "../TreeNode";
import { isSameTree } from "./index";

// Helper to build trees quickly
const build = createTree;

describe("isSameTree", () => {
	it("returns true for two empty trees", () => {
		expect(isSameTree(null, null)).toBe(true);
	});

	it("returns false if one tree is null", () => {
		expect(isSameTree(new TreeNode(1), null)).toBe(false);
		expect(isSameTree(null, new TreeNode(1))).toBe(false);
	});

	it("returns true for identical trees", () => {
		const t1 = build([1, 2, 3]);
		const t2 = build([1, 2, 3]);
		expect(isSameTree(t1, t2)).toBe(true);
	});

	it("returns false for trees with different structure", () => {
		const t1 = build([1, 2]);
		const t2 = build([1, null, 2]);
		expect(isSameTree(t1, t2)).toBe(false);
	});

	it("returns false for trees with different values", () => {
		const t1 = build([1, 2, 1]);
		const t2 = build([1, 1, 2]);
		expect(isSameTree(t1, t2)).toBe(false);
	});

	it("returns true for single-node trees with same value", () => {
		expect(isSameTree(new TreeNode(42), new TreeNode(42))).toBe(true);
	});

	it("returns false for single-node trees with different values", () => {
		expect(isSameTree(new TreeNode(1), new TreeNode(2))).toBe(false);
	});
});
