import {simplifyPath} from './index';

describe('simplifyPath', () => {
  test.each([
    ['/home/', '/home'],
    ['/../', '/'],
    ['/home//foo/', '/home/foo'],
    ['/a/./b/../../c/', '/c'],
    ['/a/../../b/../c//.//', '/c'],
    ['/a//b////c/d//././/..', '/a/b/c'],
  ])('simplifyPath("%s") should return "%s"', (path, expected) => {
    expect(simplifyPath(path)).toBe(expected);
  });
});
