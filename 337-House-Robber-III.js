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
var rob = function(root) {
    dfs(root);
    return Math.max(root.exist, root.none);
    function dfs(root){
        if(root == null){
            return;
        }
        root.none = 0;
        root.exist = root.val;
        dfs(root.left);
        dfs(root.right);
        var tmp = 0;
        if(root.left != null){
            tmp = Math.max(tmp, root.left.exist);
            tmp = Math.max(tmp, root.left.none);
            root.none += tmp;
            root.exist += root.left.none;
        }
        tmp = 0;
        if(root.right != null){
            tmp = Math.max(tmp, root.right.exist);
            tmp = Math.max(tmp, root.right.none);
            root.none += tmp;
            root.exist += root.right.none;
        }
    }
};