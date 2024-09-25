/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    let mod = Math.pow(10, 9) + 7;
    let memo = new Array(n + 1);
    for(let i = 0; i < n + 1; i++){
        memo[i] = new Array(minProfit + 1).fill(0);
    }
    memo[0][0] = 1;
    let len = group.length;
    for(let i = 0; i < len; i++){
        for(let j = n; j >= group[i]; j--){
            for(let k = minProfit; k >= 0; k--){
                memo[j][Math.min(k + profit[i], minProfit)] += memo[j - group[i]][k] % mod;
            }
        }
    }
    let ans = 0;
    for(let i = 0; i <= n; i++){
        ans += memo[i][minProfit];
    }
    ans %= mod;
   // console.log(memo);
    return ans;
};