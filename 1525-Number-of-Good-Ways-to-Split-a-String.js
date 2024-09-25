/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let len = s.length;
    let answer = 0;
    let dp = new Array(2);
    for(let i = 0; i < 2; i++){
        dp[i] = new Array(len).fill(0);
    }
    dp[0][0] |= 1 << code(s[0]);
    dp[1][len - 1] |= 1 << code(s[len - 1]);
    for(let i = 1; i < len; i++){
        dp[0][i] = (1 << code(s[i])) | dp[0][i - 1];
        dp[1][len - i - 1] = (1 << code(s[len - i - 1])) | dp[1][len - i];
    }
    for(let i = 0, front = 0, back = 0; i < len - 1; i++){
        for(let j = 0; j < 26; j++){
            front += !!(dp[0][i] & (1 << j));
            back += !!(dp[1][i + 1] & (1 << j));
        }
        if(front == back){
            answer++;
        }
        front = 0;
        back = 0;
    }
    console.log(dp);
    return answer;
    function code(i){
        return i.charCodeAt() - 97;
    }
};