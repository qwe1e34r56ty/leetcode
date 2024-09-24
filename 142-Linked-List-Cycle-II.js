/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let first = head;
    let second = head;
    if(head == null || head.next == null){
        return null;
    }
    while(first != null && second != null){
        first = first.next;
        if(second.next == null){
            return null;
        }
        second = second.next.next;
        if(first == second){
            break;
        }
    }
    if(first == null || second == null){
        return null;
    }
    second = head;
    while(first != second){
        first = first.next;
        second = second.next;
    }
    return first;
};