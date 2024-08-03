/**
 * Time complexity: O(V+E), where V is the number of courses and E is the number
 *                  of prerequisite pairs.
 * Space Complexity: O(V+E) due to the graph representation and the queue used for
 *                   processing nodes.
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  // Create an adjacency list to represent the graph
  const graph = Array.from<unknown, number[]>({length: numCourses}, () => []);

  // Create an array to keep track of in-degrees
  const inDegrees = Array.from({length: numCourses}, () => 0);

  // Build the graph
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegrees[course] += 1;
  }

  // Initialize a queue with nodes that have in-degree 0
  const queue = [];
  for (let i = 0; i < numCourses; i += 1) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  let processedNodes = 0;

  // Process the nodes in topological order
  while (queue.length > 0) {
    const node = queue.shift() as number;
    processedNodes += 1;

    for (const neighbor of graph[node]) {
      inDegrees[neighbor] -= 1;

      if (inDegrees[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If we processed all nodes, there is no cycle
  return processedNodes === numCourses;
}
