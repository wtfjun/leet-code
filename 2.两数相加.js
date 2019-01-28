/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(1);
l1.next = new ListNode(8);

let l2 = new ListNode(0);
// l2.next = new ListNode(2);

var addTwoNumbers = function(l1, l2) {
    let x = l1, y = l2;
    let carry = 0;
    let rootNode = new ListNode(-1);
    let reNode = rootNode;

    while(x || y) {
        let sum = (x ? x.val: 0) + (y ? y.val : 0) + carry;
        let node;
       
        if (sum >= 10) {
            carry = 1;
            node = new ListNode(sum - 10);
        } else {
            carry = 0;
            node = new ListNode(sum);
        }
        reNode.next = node;
        reNode = reNode.next;
    }
    
    if (carry === 1) {
        reNode.next = new ListNode(1)
    }

    return rootNode.next;
};

console.log(addTwoNumbers(l1, l2))