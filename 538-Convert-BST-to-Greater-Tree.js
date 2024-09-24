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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    dfs(root, 0);
    return root;
    function dfs(root, inherit){
        if(root == null){
            return 0;
        }
        var right_sum = dfs(root.right, inherit);
        var left_sum = dfs(root.left, root.val + right_sum + inherit);
        var ret = root.val + left_sum + right_sum;
        root.val = root.val + right_sum + inherit;
        //console.log(root.value);
        return ret;
    }
};