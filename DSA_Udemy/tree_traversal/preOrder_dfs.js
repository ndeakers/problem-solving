/**
 * traverse tree using preOrder DFS
 * use recursion
 * preOrder
 * visit a node, look through the entire left side of that node, then traverse the right
 */

function dfsPreOrder(root) {
  let visited = [];
  let current = root;
  function traverse(node) {
    visted.push(node);
    if (node.left !== null) {
      traverse(node.left);
    }
    if (node.right !== null) {
      traverse(node.right);
    }
  }
  traverse(current);
  return visited;
}