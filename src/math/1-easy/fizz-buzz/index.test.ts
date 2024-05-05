import fizzBuzz from './index';

describe('Testing "fizzBuzz"', () => {
  it.each([
    [1, ['1']],
    [3, ['1', '2', 'Fizz']],
    [5, ['1', '2', 'Fizz', '4', 'Buzz']],
    [
      15,
      [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz',
      ],
    ],
  ])('fizzBuzz(%i) should return %p', (input, expected) => {
    expect(fizzBuzz(input)).toStrictEqual(expected);
  });
});
