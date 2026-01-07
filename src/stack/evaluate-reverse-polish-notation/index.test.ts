import {evalRPN} from './index';

describe('evalRPN', () => {
  it('should correctly evaluate expressions', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    expect(
      evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ]),
    ).toBe(22);
  });

  it('should handle division correctly', () => {
    expect(evalRPN(['4', '2', '/'])).toBe(2);
    expect(evalRPN(['7', '2', '/'])).toBe(3);
    expect(evalRPN(['-7', '2', '/'])).toBe(-3);
  });

  it('should return 0 for an empty array', () => {
    expect(evalRPN([])).toBe(0);
  });
});
