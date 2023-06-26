/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function reverseList(node) {
     reversed = []
     while (node.next != null) {
        reversed.unshift(node.val)
        node = node.next
     }
     return reversed
 }

var addTwoNumbers = function(l1, l2) {
    return Number(reverseList(l1).join(''))
};
