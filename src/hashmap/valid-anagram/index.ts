function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letters = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) continue;

    letters.set(s[i], (letters.get(s[i]) || 0) + 1);
    letters.set(t[i], (letters.get(t[i]) || 0) - 1);
  }

  return !Array.from(letters.values()).some(v => v !== 0);
}

export default isAnagram;
