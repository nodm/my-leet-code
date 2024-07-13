import {canCompleteCircuit} from './index';
describe('canCompleteCircuit', () => {
  test.each([
    [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2], 3],
    [[2, 3, 4], [3, 4, 3], -1],
    [[2, 3, 4], [3, 4, 5], -1],
    [[1, 2, 3], [3, 2, 1], 1],
    [[1], [1], 0],
  ])(
    'should return the starting index of a valid circuit',
    (gas, cost, expected) => {
      expect(canCompleteCircuit(gas, cost)).toBe(expected);
    }
  );
});
