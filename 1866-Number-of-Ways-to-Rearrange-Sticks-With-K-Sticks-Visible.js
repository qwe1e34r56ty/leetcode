/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
    let memo = new Array(n + 1);
    let mod = Math.pow(10, 9) + 7;
    for(let i = 0; i < n + 1; i++){
        memo[i] = new Array(k + 1).fill(-1);
    }
    return dp(n, k);
    function dp(n, k){
        if(n < k || k == 0){
            return 0;
        }
        if(n == k || n <= 2){
            return 1;
        }
        if(memo[n][k] != -1){
            return memo[n][k];
        }
        let answer = 0;
        answer += dp(n - 1, k - 1);
        answer += (n - 1) * dp(n - 1, k);
        answer %= mod; 
        memo[n][k] = answer;
        return answer;
    }
}