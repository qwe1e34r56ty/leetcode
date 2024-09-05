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
 * @return {boolean}
 */

function recursion(node, left, right){
    if(node.left != null && (node.left.val >= node.val || node.left.val <= left)){
        return false;
    }
    if(node.right != null && (node.right.val <= node.val || node.right.val >= right)){
        return false;
    }
    if(node.left == null && node.right == null){
        return true;
    }
    if(node.left == null && node.right != null){
        return recursion(node.right, node.val, right);
    }
    if(node.left != null && node.right == null){
        return recursion(node.left, left, node.val);
    }
    if(node.left != null && node.right != null){
        return recursion(node.left, left, node.val) && recursion(node.right, node.val, right);
    }
}

var isValidBST = function(root) {
    return recursion(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};