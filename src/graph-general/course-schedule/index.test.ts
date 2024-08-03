import {canFinish} from '.';

describe('canFinish', () => {
  it('should return true when there are no prerequisites', () => {
    const numCourses = 3;
    const prerequisites: number[][] = [];
    const result = canFinish(numCourses, prerequisites);
    expect(result).toBe(true);
  });

  it('should return true when it is possible to finish all courses', () => {
    const numCourses = 4;
    const prerequisites: number[][] = [
      [1, 0],
      [2, 1],
      [3, 2],
    ];
    const result = canFinish(numCourses, prerequisites);
    expect(result).toBe(true);
  });

  it('should return false when there is a cycle in the prerequisites', () => {
    const numCourses = 3;
    const prerequisites: number[][] = [
      [0, 1],
      [1, 2],
      [2, 0],
    ];
    const result = canFinish(numCourses, prerequisites);
    expect(result).toBe(false);
  });
});
