/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
    let mod = Math.pow(10, 9) + 7;
    let memo = new Array(n + 1);
    for(let i = 0; i < n + 1; i++){
        memo[i] = new Array(m + 1);
        for(let j = 0; j < m + 1; j++){
            memo[i][j] = new Array(k + 1).fill(-1);
        }
    }
    return dp(n, m, k, 0, 0, 0);
    
    function dp(n, m, k, c_n, c_m, c_k){
        if(n == c_n){
            if(c_k == k){
                return 1;
            }
            return 0;
        }
        if(memo[c_n][c_m][c_k] != -1){
            return memo[c_n][c_m][c_k];
        }
        let ret = 0;
        ret += c_m * dp(n, m, k, c_n + 1, c_m, c_k);
        ret %= mod;
        if(c_k < k){
            for(let i = c_m + 1; i <= m; i++){
                ret += dp(n, m, k, c_n + 1, i, c_k + 1);
                ret %= mod;
            }
        }
        memo[c_n][c_m][c_k] = ret;
        return ret;
    }
};