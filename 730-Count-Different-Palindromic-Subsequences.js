/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function(S) {
    var mod = 1000000007;
    var s_len = S.length;
    var alpha = ['a', 'b', 'c', 'd'];
    var memo = new Array(s_len);
    for(var i = 0; i < s_len; i++){
        memo[i] = new Array(s_len);
        for(var j = 0; j < s_len; j++){
            memo[i][j] = new Array(4).fill(-1);
        }
    }
    var answer = 0;
    for(var i = 0; i < 4; i++){
        answer += dp(0, s_len - 1, i) % mod;
    }
    return answer % mod; 
    
    function dp(i, j, index){
        if(i > j){
            return 0;
        }
        else if(i == j && S[i] == alpha[index]){
            memo[i][j][index] = 1;
            return 1;
        }
        else if(i == j && S[i] != alpha[index]){
            memo[i][j][index] = 0;
            return 0;
        }
        if(memo[i][j][index] != -1){
            return memo[i][j][index];
        }
        var ret = 0;
        if(S[i] == S[j] && S[i] == alpha[index]){
            ret = 2;
            ret += dp(i + 1, j - 1, 0) % mod;
            ret += dp(i + 1, j - 1, 1) % mod;
            ret += dp(i + 1, j - 1, 2) % mod;
            ret += dp(i + 1, j - 1, 3) % mod;
        }
        else{
            ret += dp(i + 1, j, index) % mod;
            ret += dp(i, j - 1, index) % mod;
            ret -= dp(i + 1, j - 1, index) %mod;
        }
        ret %= mod;
        memo[i][j][index] = ret;
        return ret;
    }
};