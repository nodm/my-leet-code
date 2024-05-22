import isAnagram from './index';

describe('isAnagram', () => {
  test('isAnagram("anagram", "nagaram") should return true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  test('isAnagram("rat", "car") should return false', () => {
    expect(isAnagram('rat', 'car')).toBeFalsy();
  });

  test('isAnagram("你好", "好你") should return true', () => {
    expect(isAnagram('你好', '好你')).toBeTruthy();
  });

  test('isAnagram("こんにちは", "こんにちは") should return true', () => {
    expect(isAnagram('こんにちは', 'こんにちは')).toBeTruthy();
  });

  test('isAnagram("你好", "你吗") should return true', () => {
    expect(isAnagram('你好', '你吗')).toBeFalsy();
  });
});
