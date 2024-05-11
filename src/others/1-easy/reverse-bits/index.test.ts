import reverseBits from './index';

describe('Testing "reverseBits"', () => {
  test.each([
    [0b00000010100101000001111010011100, 0b00111001011110000010100101000000],
    [0b11111111111111111111111111111101, 0b10111111111111111111111111111111],
  ])('reverseBits(%i) should return %i', (n, expected) => {
    expect(reverseBits(n)).toBe(expected);
  });
});
