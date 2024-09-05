/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var cur = postorder.length;
    if(cur == 0){
        return null;
    }
    function dfs(s, d){
        var root;
        if(s > d){
            return null;
        }
        for(var i = s; i <= d; i++){
            if(postorder[cur - 1] == inorder[i]){
                root = new TreeNode(inorder[i], undefined, undefined);
                cur--;
                root.right = dfs(i + 1, d);
                root.left = dfs(s, i - 1);
                break;
            }
        }
        return root;
    }
    return dfs(0, cur - 1);
};