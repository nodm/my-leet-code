import { describe, expect, it } from "vitest";
import { minWindow, minWindowOptimal, minWindowPerformant } from "./index";

describe("minWindow", () => {
	it("should return the minimum window substring for basic case", () => {
		expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
	});

	it("should return the entire string when it is the minimum window", () => {
		expect(minWindow("a", "a")).toBe("a");
	});

	it("should return empty string when window cannot contain all characters", () => {
		expect(minWindow("a", "aa")).toBe("");
	});

	it("should handle duplicate characters in target string", () => {
		expect(minWindow("aa", "aa")).toBe("aa");
	});

	it("should return empty string when s is shorter than t", () => {
		expect(minWindow("ab", "abc")).toBe("");
	});

	it("should handle case when target is at the beginning", () => {
		expect(minWindow("ADOBEC", "ABC")).toBe("ADOBEC");
	});

	it("should handle case when target is at the end", () => {
		expect(minWindow("XYABC", "ABC")).toBe("ABC");
	});

	it("should handle mixed case letters", () => {
		expect(minWindow("AaBbCc", "abc")).toBe("aBbCc");
	});

	it("should return the leftmost window when multiple windows exist", () => {
		const result = minWindow("ABAACBAB", "ABC");
		// The minimum window is "ACB" with length 3 (at indices 5-7)
		expect(result).toBe("ACB");
		expect(result.length).toBe(3);
	});

	it("should handle large strings efficiently", () => {
		const s = `${"A".repeat(1000)}BC`;
		const t = "ABC";
		expect(minWindow(s, t)).toBe("ABC");
	});
});

describe("minWindowOptimal", () => {
	it("should return the minimum window substring for basic case", () => {
		expect(minWindowOptimal("ADOBECODEBANC", "ABC")).toBe("BANC");
	});

	it("should return the entire string when it is the minimum window", () => {
		expect(minWindowOptimal("a", "a")).toBe("a");
	});

	it("should return empty string when window cannot contain all characters", () => {
		expect(minWindowOptimal("a", "aa")).toBe("");
	});

	it("should handle duplicate characters in target string", () => {
		expect(minWindowOptimal("aa", "aa")).toBe("aa");
	});

	it("should return empty string when s is shorter than t", () => {
		expect(minWindowOptimal("ab", "abc")).toBe("");
	});

	it("should handle case when target is at the beginning", () => {
		expect(minWindowOptimal("ADOBEC", "ABC")).toBe("ADOBEC");
	});

	it("should handle case when target is at the end", () => {
		expect(minWindowOptimal("XYABC", "ABC")).toBe("ABC");
	});

	it("should handle mixed case letters", () => {
		expect(minWindowOptimal("AaBbCc", "abc")).toBe("aBbCc");
	});

	it("should return the leftmost window when multiple windows exist", () => {
		const result = minWindowOptimal("ABAACBAB", "ABC");
		expect(result).toBe("ACB");
		expect(result.length).toBe(3);
	});

	it("should handle large strings efficiently", () => {
		const s = `${"A".repeat(1000)}BC`;
		const t = "ABC";
		expect(minWindowOptimal(s, t)).toBe("ABC");
	});
});

describe("minWindowPerformant", () => {
	it("should return the minimum window substring for basic case", () => {
		expect(minWindowPerformant("ADOBECODEBANC", "ABC")).toBe("BANC");
	});

	it("should return the entire string when it is the minimum window", () => {
		expect(minWindowPerformant("a", "a")).toBe("a");
	});

	it("should return empty string when window cannot contain all characters", () => {
		expect(minWindowPerformant("a", "aa")).toBe("");
	});

	it("should handle duplicate characters in target string", () => {
		expect(minWindowPerformant("aa", "aa")).toBe("aa");
	});

	it("should return empty string when s is shorter than t", () => {
		expect(minWindowPerformant("ab", "abc")).toBe("");
	});

	it("should handle case when target is at the beginning", () => {
		expect(minWindowPerformant("ADOBEC", "ABC")).toBe("ADOBEC");
	});

	it("should handle case when target is at the end", () => {
		expect(minWindowPerformant("XYABC", "ABC")).toBe("ABC");
	});

	it("should handle mixed case letters", () => {
		expect(minWindowPerformant("AaBbCc", "abc")).toBe("aBbCc");
	});

	it("should return the leftmost window when multiple windows exist", () => {
		const result = minWindowPerformant("ABAACBAB", "ABC");
		expect(result).toBe("ACB");
		expect(result.length).toBe(3);
	});

	it("should handle large strings efficiently", () => {
		const s = `${"A".repeat(1000)}BC`;
		const t = "ABC";
		expect(minWindowPerformant(s, t)).toBe("ABC");
	});
});
