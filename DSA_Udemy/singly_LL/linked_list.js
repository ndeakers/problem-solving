class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let previousTail = this.tail;
      previousTail.next = newNode;
      newNode.next = null;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // removes from end of linked list and returns the removed node
  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;

  }
  // remove a node from the beginning of the list and return that node
  shift() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return current;
  }
  // add a node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // takes an index and returns the item in that position
  get(idx) {
    if (idx >= this.length) {
      return undefined;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // accepts a position and value and updates that value at that position
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
    foundNode.val = val;
    return true;
    }
    return false;
  }
  // inserts a new node at given position
  insert(idx, val) {
    let newNode = new Node(val);
    if (idx < 0 || idx > this.length) {
      return false;
    } else if (idx === this.length) {
      this.push(val);
    } else if (idx === 0) {
      this.unshift(val);
    } else {
      let previous = this.get(idx - 1);
      let tmp = previous.next;
      previous.next = newNode;
      newNode.next = tmp;
      this.length++;
    }
    return true;
  }

  // takes an index and removes the node at that index
  remove(idx) {
    if (idx < 0 || idx >= length) return undefined;
    if (idx === this.length - 1) {
      return this.pop();
    } else if (idx === 0) {
      return this.shift();
    } else {
      let previous = this.get(idx - 1);
      let removed = previous.next;
      previous.next = previous.next.next;
      this.length--;
      return removed;
    }
  }
  // reverses the linked list in place
  reverse() {
    let node = this.head
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = node.next
    }
    return this; 
  }
}