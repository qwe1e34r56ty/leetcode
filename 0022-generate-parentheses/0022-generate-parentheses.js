/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let dp = new Array(2 * n);
    for(let i = 0; i < 2 * n; i++){
        dp[i] = new Array(n + 1);
        for(let j = 0; j < n + 1; j++){
            dp[i][j] = new Array();
        }
    }
    dp[0][1].push("(");
    for(let i = 1; i < 2 * n; i++){
        for(let j = 0; j < n + 1; j++){
            if(j > 0){
                for(let k = 0; k < dp[i - 1][j - 1].length; k++){
                    dp[i][j].push(dp[i - 1][j - 1][k] + "(");
                }
            }
            if(j < n){
                for(let k = 0; k < dp[i - 1][j + 1].length; k++){
                    dp[i][j].push(dp[i - 1][j + 1][k] + ")");
                }
            }
        }
    }
    //console.log(dp);
    return dp[2 * n - 1][0];
};