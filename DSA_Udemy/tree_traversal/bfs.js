/**
 * implement bfs given the root of tree
 */

function bfs(root) {
  let current = root;
  let queue = [current];
  let visited = [];

  while (queue.length !== 0) {
    current = queue.shift();
    visited.push(current);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return visited;
}