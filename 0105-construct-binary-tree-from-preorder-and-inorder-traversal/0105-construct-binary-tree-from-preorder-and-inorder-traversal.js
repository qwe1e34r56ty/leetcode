/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var precur;
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0){
        return null;
    }
    precur = -1;
    return dfs(preorder, inorder, 0, inorder.length, inorder.length);    
};

function dfs(preorder, inorder, in_start, in_end, in_size){
    var root;
    var left;
    var right;
    if(in_start >= in_end){
        return undefined;
    }
    precur++;
    for(var i = in_start; i < in_end; i++){
        if(preorder[precur] == inorder[i]){
            left = dfs(preorder, inorder, in_start, i, in_size);
            right = dfs(preorder, inorder, i + 1, in_end, in_size);
            root = new TreeNode(inorder[i], left, right);
            return root;
        }
    }
}