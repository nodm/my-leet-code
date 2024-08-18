import {myPow} from '.';

describe('myPow', () => {
  it('should return 1 when the exponent is 0', () => {
    const base = 2;
    const exponent = 0;
    const result = myPow(base, exponent);
    expect(result).toEqual(1);
  });

  it('should correctly calculate positive exponents', () => {
    const base = 2;
    const exponent = 3;
    const result = myPow(base, exponent);
    expect(result).toEqual(8);
  });

  it('should correctly calculate negative exponents', () => {
    const base = 2;
    const exponent = -3;
    const result = myPow(base, exponent);
    expect(result).toEqual(0.125);
  });
});
