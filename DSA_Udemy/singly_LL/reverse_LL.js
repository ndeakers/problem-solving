/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function (head) {
  let current = head;
  let runner = null;
  let prev = null;
  while (current !== null) {
    runner = current.next; // null at the end
    current.next = prev;
    prev = current;
    current = runner;

  }

  head = prev; // current is null after while broke out. previous is new head
  return head;
};