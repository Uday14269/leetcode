/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let newHead = head;
    while (newHead && newHead.val === val) {
        newHead = newHead.next;
    }
    
   
    let currHead = newHead;
    while (currHead && currHead.next) {
        if (currHead.next.val === val) {
            currHead.next = currHead.next.next;
        } else {
            
            currHead = currHead.next;
        }
    }
    
    return newHead;
};
