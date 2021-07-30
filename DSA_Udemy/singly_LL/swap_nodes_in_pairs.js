/**
 * Definition for singly-linked list.
 * function ListNode(val, next) { // treat as a class
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 */
var swapPairs = function (head) {
  // create a dummy node pointing to the head
  let dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next !== null && current.next.next !== null) {
    let a = current.next;
    let b = current.next.next;
    a.next = b.next;
    current.next = b;
    b.next = a;

    current = current.next.next
  }
  // head is swapped so need dummy node to point to new head
  return dummy.next;
};