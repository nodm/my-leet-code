import {intToRoman} from './index';

describe('intToRoman', () => {
  it('should convert 3 to "III"', () => {
    expect(intToRoman(3)).toBe('III');
  });

  it('should convert 4 to "IV"', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  it('should convert 9 to "IX"', () => {
    expect(intToRoman(9)).toBe('IX');
  });

  it('should convert 58 to "LVIII"', () => {
    expect(intToRoman(58)).toBe('LVIII');
  });

  it('should convert 1994 to "MCMXCIV"', () => {
    expect(intToRoman(1994)).toBe('MCMXCIV');
  });
});
