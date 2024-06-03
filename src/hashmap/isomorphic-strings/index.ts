function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // const mapS = new Map<string, string>();
  // const mapT = new Map<string, string>();

  // for (let i = 0; i < s.length; i++) {
  //   if (mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) return false;
  //   if (mapT.has(t[i]) && mapT.get(t[i]) !== s[i]) return false;

  //   mapS.set(s[i], t[i]);
  //   mapT.set(t[i], s[i]);
  // }

  // ASCII characters range from 0 to 127
  const mapS = new Array(128).fill(-1);
  const mapT = new Array(128).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const charS = s.charCodeAt(i);
    const charT = t.charCodeAt(i);

    if (mapS[charS] !== mapT[charT]) return false;

    // Set the mappings
    mapS[charS] = i;
    mapT[charT] = i;
  }

  return true;
}

export default isIsomorphic;
