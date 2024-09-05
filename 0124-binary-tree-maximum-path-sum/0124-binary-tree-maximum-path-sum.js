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
var answer;

var maxPathSum = function(root) {
    answer = Number.MIN_SAFE_INTEGER;
    var down = maxPathDown(root);
    return (answer > down) ? answer : down;
};

function maxPathDown(root){
    var left = 0;
    var right = 0;
    var tmp = 0;
    if(root.left != null){
        tmp = maxPathDown(root.left);
        left = (0 > tmp) ? 0 : tmp;
    }
    if(root.right != null){
        tmp = maxPathDown(root.right)
        right = (0 > tmp) ? 0 : tmp;
    }
    answer = (answer > left + right + root.val) ? answer : left + right + root.val;
    return ((left > right) ? left : right) + root.val;
}