import { findOrder } from '.';

describe('findOrder', () => {
  it('returns the correct order of courses when there is a valid schedule', () => {
    const numCourses = 4;
    const prerequisites = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ];
    const expected = [0, 1, 2, 3];
    const result = findOrder(numCourses, prerequisites);
    expect(result).toEqual(expected);
  });

  it('returns an empty array when there is no valid schedule', () => {
    const numCourses = 3;
    const prerequisites = [
      [1, 0],
      [0, 2],
      [2, 1],
    ];
    const expected: number[] = [];
    const result = findOrder(numCourses, prerequisites);
    expect(result).toEqual(expected);
  });

  it('returns the correct order of courses when they have no prerequisites', () => {
    const numCourses = 2;
    const prerequisites: number[][] = [];
    const expected = [1, 0];
    const result = findOrder(numCourses, prerequisites);
    expect(result.sort()).toEqual(expected.sort());
  });

  it('returns the correct order of courses when there is only one course', () => {
    const numCourses = 1;
    const prerequisites: number[][] = [];
    const expected = [0];
    const result = findOrder(numCourses, prerequisites);
    expect(result).toEqual(expected);
  });
});
