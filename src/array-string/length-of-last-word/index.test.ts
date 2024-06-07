import {lengthOfLastWord} from './index';

describe('lengthOfLastWord', () => {
  it('should return 5 for "Hello World"', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  it('should return 0 for " "', () => {
    expect(lengthOfLastWord(' ')).toBe(0);
  });

  it('should return 5 for "Today is a nice day"', () => {
    expect(lengthOfLastWord('Today is a nice day')).toBe(3);
  });
});
