export function minWindow(s: string, t: string): string {
	const m = s.length;
	const n = t.length;

	if (n === 0) return "";
	if (m < n) return "";

	let left = 0;
	while (!t.includes(s[left])) {
		left += 1;
	}

	if (m - left < n) return "";

	let result = "";

	while (left < m - n + 1) {
		let right = left;
		const cnt = t.split("");

		while (right < m && cnt.length > 0) {
			const i = cnt.indexOf(s[right]);
			if (i !== -1) {
				cnt.splice(i, 1);
			}

			if (cnt.length === 0) {
				const substring = s.slice(left, right + 1);
				if (substring.length < result.length || result === "") {
					result = substring;
				}
			}

			right += 1;
		}

		left += 1;
	}

	return result;
}

/**
 * Optimal solution using sliding window technique
 * Time Complexity: O(m + n) where m = s.length, n = t.length
 * Space Complexity: O(m + n) for hash maps
 */
export function minWindowOptimal(s: string, t: string): string {
	if (s.length === 0 || t.length === 0 || s.length < t.length) {
		return "";
	}

	// Count frequency of characters in t
	const targetFreq = new Map<string, number>();
	for (const char of t) {
		targetFreq.set(char, (targetFreq.get(char) || 0) + 1);
	}

	// Sliding window variables
	let left = 0;
	let minLen = Infinity;
	let minStart = 0;
	const required = targetFreq.size; // Number of unique characters in t
	let formed = 0; // Number of unique characters in current window with desired frequency

	// Window character frequency
	const windowFreq = new Map<string, number>();

	for (let right = 0; right < s.length; right++) {
		// Expand window by adding character at right pointer
		const char = s[right];
		windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

		// Check if current character's frequency matches the target frequency
		if (targetFreq.has(char) && windowFreq.get(char) === targetFreq.get(char)) {
			formed++;
		}

		// Contract window from left while it's valid
		while (formed === required && left <= right) {
			// Update result if current window is smaller
			if (right - left + 1 < minLen) {
				minLen = right - left + 1;
				minStart = left;
			}

			// Remove character at left pointer
			const leftChar = s[left];
			windowFreq.set(leftChar, windowFreq.get(leftChar)! - 1);

			// Check if removing this character breaks the validity
			if (
				targetFreq.has(leftChar) &&
				windowFreq.get(leftChar)! < targetFreq.get(leftChar)!
			) {
				formed--;
			}

			left++;
		}
	}

	return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

/**
 * Most optimal solution using array-based sliding window
 * Time Complexity: O(m + n) where m = s.length, n = t.length
 * Space Complexity: O(1) - fixed 128-size array for ASCII characters
 * 
 * This is superior to the Map-based approach because:
 * - Constant space O(1) vs O(m+n)
 * - Faster array access vs Map operations
 * - Simpler single counter logic
 */
export function minWindowArray(s: string, t: string): string {
  // How many of each character we need
  // Positive = still need, Negative = have extra, Zero = exact match
	const need = new Array(128).fill(0);

	for (const c of t) {
    need[c.charCodeAt(0)]++;
  }

	
  let count = t.length; // Total characters still needed (not unique chars)
	let left = 0;
	let start = 0;
	let minLen = Infinity;

	for (let right = 0; right < s.length; right++) {
		// If we need this character, decrease count
		if (need[s.charCodeAt(right)] > 0) count--;

    // Decrease need (can go negative for extra chars)
		need[s.charCodeAt(right)]--;

		// When count is 0, we have all required characters
		while (count === 0) {
			// Update minimum window
			if (right - left + 1 < minLen) {
				minLen = right - left + 1;
				start = left;
			}

			// Try to shrink window from left
			need[s.charCodeAt(left)]++;
			// If need becomes positive, we're removing a required character
			if (need[s.charCodeAt(left)] > 0) count++;
			left++;
		}
	}

	return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
