/**
 * Time Complexity: O(V+E), where V is the number of courses and
 *                  E is the number of prerequisite pairs. Each
 *                  node and edge is processed once.
 * Space Complexity: O(V+E) for the adjacency list and in-degree array.
 */
export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  // Create an adjacency list to represent the graph
  const graph = Array.from<unknown, number[]>({length: numCourses}, () => []);

  // Create an array to keep track of in-degrees
  const inDegrees = Array.from({length: numCourses}, () => 0);

  // Build the graph
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegrees[course] += 1;
  }
  // Initialize the queue with all nodes having in-degree 0
  const queue = [];
  for (let i = 0; i < numCourses; i += 1) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  const result = [];

  // Process nodes in topological order
  while (queue.length > 0) {
    const course = queue.shift() as number;
    result.push(course);

    for (const neighbor of graph[course]) {
      inDegrees[neighbor] -= 1;

      if (inDegrees[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Check if we processed all courses
  if (result.length === numCourses) return result;

  return [];
}
