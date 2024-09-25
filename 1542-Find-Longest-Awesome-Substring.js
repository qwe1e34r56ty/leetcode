/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function(s) {
    let mask = 0;
    let len = s.length;
    let dp = new Array(1 << 10).fill(len);
    dp[0] = -1;
    let ans = 0;
    for(let i = 0; i < len; i++){
        mask ^= (1 << (s[i].charCodeAt() - 48));
        ans = Math.max(ans, i - dp[mask]);
        for(let j = 0; j <= 9; j++){
            ans = Math.max(ans, i - dp[mask ^ (1 << j)]);
        }
        dp[mask] = Math.min(dp[mask], i);
    }
    return ans;
};