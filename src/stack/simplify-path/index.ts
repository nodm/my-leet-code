export function simplifyPath(path: string): string {
  const stack: string[] = [];

  for (const dir of path.split('/')) {
    if (dir === '..') {
      stack.pop();
    } else if (dir && dir !== '.') {
      stack.push(dir);
    }
  }

  return '/' + stack.join('/');
}
