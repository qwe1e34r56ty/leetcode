/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    var queue = new Array();
    var buffer = new Array();
    var answer = 0;
    var cur = null;
    buffer.push(root);
    while(buffer.length != 0){
        if(buffer.length != 0){
            answer = buffer[0].val;
        }
        queue = buffer.slice();
        buffer = [];
        while(queue.length != 0){
            cur = queue.shift();
            if(cur.left != null){
                buffer.push(cur.left);
            }
            if(cur.right != null){
                buffer.push(cur.right);
            }
        }
    }
    return answer;
};