/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    let dp = new Array(n + 1);
    for(let i = 0; i < n + 1; i++){
        dp[i] = new Array();
    }
    dp[0].push(undefined);
    dp[1].push(new TreeNode(0, undefined, undefined));
    for(let i = 2; i < n + 1; i++){
        for(let j = 0; j < i; j++){
            for(let k = 0; k < dp[j].length; k++){
                for(let l = 0; l < dp[i - j - 1].length; l++){
                    if(dp[j][k] != undefined && dp[i - j - 1][l] != undefined){
                        dp[i].push(new TreeNode(0, dp[j][k], dp[i - j - 1][l]));
                    }
                }
            }
        }
    }
    return dp[n];
};