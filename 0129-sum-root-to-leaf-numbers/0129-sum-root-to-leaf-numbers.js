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
var sumNumbers = function(root) {
    var answer = 0;
    dfs(root, 0);
    return answer;
    function dfs(root, cur){
        if(root.left != undefined){
            dfs(root.left, (cur + root.val) * 10);
        }
        if(root.right != undefined){
            dfs(root.right, (cur + root.val) * 10);
        }
        if(root.left == undefined && root.right == undefined){
            answer += cur + root.val;
        }
    }
};