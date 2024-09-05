/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var array = [];
    for(var i = head; i != null;){
        array.push(i.val);
        i = i.next;
    }
    console.log(array);
    function dfs(s, d){
        var root;
        var mid;
        if(s > d){
            return null;
        }
        mid = Math.trunc((s + d + 1) / 2);
        root = new TreeNode(array[mid], undefined, undefined);
        root.left = dfs(s, mid - 1);
        root.right = dfs(mid + 1, d);
        return root;
    }
    return dfs(0, array.length - 1);
};