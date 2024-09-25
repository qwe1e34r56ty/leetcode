/**
 * @param {number[][]} cost
 * @return {number}
 */
var connectTwoGroups = function(cost) {
    let n = cost.length;
    let m = cost[0].length;
    let dp = new Array(n + 1);
    for(let i = 0; i <= n; i++){
        dp[i] = new Array(1 << m).fill(Number.MAX_SAFE_INTEGER);
    }
    dp[0][0] = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < (1 << m); j++){
            for(let k = 0; k < m; k++){
                if((j | (1 << k)) < (1 << m)){
                    dp[i][j | (1 << k)] = Math.min(dp[i][j | (1 << k)], dp[i - 1][j] + cost[i - 1][k]);
                    dp[i][j | (1 << k)] = Math.min(dp[i][j | (1 << k)], dp[i][j] + cost[i - 1][k]);
                }
            }
        }
    }
    //console.log(dp);
    return dp[n][(1 << m) - 1];
};