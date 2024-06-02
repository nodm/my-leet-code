function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineAlphabet = new Map<string, number>();
  for (const char of magazine) {
    magazineAlphabet.set(char, (magazineAlphabet.get(char) ?? 0) + 1);
  }

  for (const char of ransomNote) {
    if (!magazineAlphabet.has(char) || magazineAlphabet.get(char)! === 0)
      return false;

    magazineAlphabet.set(char, magazineAlphabet.get(char)! - 1);
  }

  return true;
}

export default canConstruct;
