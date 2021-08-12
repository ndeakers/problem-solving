class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (newNode.val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else if (newNode < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) {
      return undefined;
    }
    let current = this.root;
    while (current !== null) {
      if (current.val === val) {
        return current;
      } else if (current.val < val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}