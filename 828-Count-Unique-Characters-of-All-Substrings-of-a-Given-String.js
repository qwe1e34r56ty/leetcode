/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let code = (c) => c.charCodeAt() - 65;
    let ans = 1;
    let len = s.length;
    let last = new Array(26).fill(-1);
    let dup = new Array(26).fill(0);
    let dp = new Array(len + 1).fill(undefined)
    dp[0] = 0;
    dp[1] = 1;
    last[code(s[0])] = 0;
    for(let i = 1; i < len; i++){
        dp[i + 1] = dp[i] + i + 1;
        if(last[code(s[i])] != -1){
            dp[i + 1] -= last[code(s[i])] + 1;
            dp[i + 1] -= last[code(s[i])] + 1 - dup[code(s[i])];
            dup[code(s[i])] = last[code(s[i])] + 1;
        }
        last[code(s[i])] = i;
        ans += dp[i + 1];
    }
    return ans;
};