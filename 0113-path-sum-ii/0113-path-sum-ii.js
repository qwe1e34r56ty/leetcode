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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root == null){
        return [];
    }
    var answer = [];
    var tmp = [];
    var tmpsum = 0;   
    dfs(answer, tmp, tmpsum, root, sum);
    return answer;
};

function dfs(answer, tmp, tmpsum, node, sum){
    tmp.push(node.val);
    tmpsum += node.val;
    if(tmpsum == sum && node.left == null && node.right == null){
        answer.push(tmp.slice());
        tmp.pop();
        tmpsum -= node.val;
        return;
    }
    if(node.left != null){
        dfs(answer, tmp, tmpsum, node.left, sum);
    }
    if(node.right != null){
        dfs(answer, tmp, tmpsum, node.right, sum);
    }
    tmp.pop();
    tmpsum -= node.val;
    return;
}