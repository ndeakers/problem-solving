/**
 * root{
 * this.children
 * this.val
 * }
 * given a root node. Return the preOrder traversal of an nary tree
 * [1,null,3,2,4,null,5,6] ===> [1,3,5,6,2,4]
 */



var preorder = function (root) {

  if (root === null) {
    return [];
  }
  let seen = [root.val];
  function preorderHelper(root) {
    ;
    for (let child of root.children) {
      seen.push(child.val);
      preorderHelper(child);
    }
  }
  preorderHelper(root);
  return seen;
};

