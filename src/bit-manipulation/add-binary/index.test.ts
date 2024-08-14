import {addBinary} from '.';

describe('addBinary', () => {
  it('should return the sum of two binary numbers', () => {
    const result = addBinary('11', '1');
    expect(result).toEqual('100');
  });

  it('should handle leading zeros in the binary numbers', () => {
    const result = addBinary('1010', '1011');
    expect(result).toEqual('10101');
  });

  it('should handle different lengths of binary numbers', () => {
    const result = addBinary('111', '10');
    expect(result).toEqual('1001');
  });

  it('should handle carry over', () => {
    const result = addBinary('1111', '1');
    expect(result).toEqual('10000');
  });
});
