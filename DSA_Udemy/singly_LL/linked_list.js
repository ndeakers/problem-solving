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
  }
}