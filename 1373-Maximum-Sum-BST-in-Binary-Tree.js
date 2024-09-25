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
var maxSumBST = function(root) {
    var answer = 0;
    dfs(root);
    //console.log(answer);
    return answer;
    function dfs(root){
        if(root == null){
            return [null, null, 0];
        }
        var sum = 0;
        const [l_min, l_max, l_sum] = dfs(root.left);
        const [r_min, r_max, r_sum] = dfs(root.right);
        if((l_min == null || (l_max < root.val))
           && (r_min == null || (r_min > root.val))){
            sum = l_sum + root.val + r_sum;
            answer = Math.max(answer, sum);
            return [(l_min == null ? root.val : l_min), (r_max == null ? root.val : r_max), sum];
        }
        else{
            return [null, null, -Infinity];
        }
    }
};