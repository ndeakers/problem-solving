class Node {
  constructor() {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let popped;
    if (this.length === 0) {
      return undefined
    } else if (this.length === 1) {
      popped = this.tail;
      this.tail = null;
      this.head = null;
    } else {
      let newTail = this.tail.prev;
      popped = this.tail;
      popped.prev = null;
      newTail.next = null;
    }
    this.length--;
    return popped;
  }
  // remove node from beginning
  shift() {
    let oldHead;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      oldHead = this.head;
      this.tail = null;
      this.head = null;
    } else {
      oldHead = this.head;
      oldHead.next = null;
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  // add to the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      oldHead.prev = newNode;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    if (idx <= this.length / 2) {
      let count = 0;
      let current = this.head
      while (count !== idx) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(idx, val) {
    let newNode = new Node(val);
    if (idx < 0 || idx > this.length) return undefined;
    if (this.length === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let found = this.get(idx);
    if (found) {
      let previous = found.prev;
      found.prev = newNode;
      newNode.next = found
      previous.next = newNode;
      newNode.prev = previous;
      this.length++;
      return this;
    }
  }

  remove(idx) {
    if (idx < 0 || idx >= length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let removed = this.get(idx);
    let beforeRemoved = removed.prev;
    let afterRemoved = removed.next;
    beforeRemoved.next = afterRemoved;
    afterRemoved.prev = beforeRemoved;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}