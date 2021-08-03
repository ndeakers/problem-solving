/**
 * post-order----> traverse the whole branch from a given node. all the way down the left
 * then the right, then looking at the node.
 *        10
      6      15
    3     8       20
===> [3,8, 6, 20, 15, 10]
*/

function postOrderDfs(root) {
  let visted = [];
  let current = root;
  function traverse(node) {
    if (node.left !== null) {
      traverse(node.left);
    }
    if (node.right !== null) {
      traverse(node.right);
    }
    visted.push(node); // adding to visited after being popped off the stack
  }
  traverse(current);
  return visited;
}