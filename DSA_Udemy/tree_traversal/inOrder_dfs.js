/**
 * in-order----> on every node we traverse the left, then we visited the node, then we 
 * traverse the right
 *        10
      6      15
    3     8       20
===> [3,6, 8, 10, 15, 20]
*/
function inOrderDfs(root) {
  let visted = [];
  let current = root;
  function traverse(node) {
    if (node.left !== null) {
      traverse(node.left);
    }
    visted.push(node); // adding to visited after traversed the left
    if (node.right !== null) {
      traverse(node.right);
    }

  }
  traverse(current);
  return visited;
}