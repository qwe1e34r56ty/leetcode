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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var MAX = { val:Number.MAX_SAFE_INTEGER, left:undefined, right:undefined };
    var MIN = { val:Number.MIN_SAFE_INTEGER, left:undefined, right:undefined };
    while(recursion(root, MIN, MAX)){
    };
    return root;
};

function recursion(root, left, right){
    var tmp;
    if(root.val <= left.val){
        tmp = root.val;
        root.val = left.val;
        left.val = tmp;
        return 1;
    }
    if(root.val >= right.val){
        tmp = root.val;
        root.val = right.val;
        right.val = tmp;
        return 1;
    }
    if(root.left != null){
        if(recursion(root.left, left, root)) return 1;
    }
    if(root.right != null){
        if(recursion(root.right, root, right)) return 1;
    }
    return 0;
}