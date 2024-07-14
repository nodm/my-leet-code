import {convert} from './index';
describe('convert', () => {
  it('should return the same string when numRows is 1', () => {
    const s = 'Hello, World!';
    const numRows = 1;
    const result = convert(s, numRows);
    expect(result).toBe(s);
  });

  it('should return the same string when numRows is greater than or equal to the length of s', () => {
    const s = 'Hello, World!';
    const numRows = 14;
    const result = convert(s, numRows);
    expect(result).toBe(s);
  });

  it('should return the correct zigzag conversion for numRows = 3', () => {
    const s = 'PAYPALISHIRING';
    const numRows = 3;
    const expected = 'PAHNAPLSIIGYIR';
    const result = convert(s, numRows);
    expect(result).toBe(expected);
  });

  it('should return the correct zigzag conversion for numRows = 4', () => {
    const s = 'PAYPALISHIRING';
    const numRows = 4;
    const expected = 'PINALSIGYAHRPI';
    const result = convert(s, numRows);
    expect(result).toBe(expected);
  });
});
