/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
    var n = s.length;
    var palin = new Array(n);
    for(var i = 0; i < n; i++){
        palin[i] = new Array(n).fill(0);
    }
    for(var i = 0; i < n; i++){
        palin[i][i] = 1;
    }
    for(var i = 0; i < n - 1; i++){
        if(s[i] == s[i + 1]){
            palin[i][i + 1] = 1;
        }
    }
    for(var i = 2; i < n; i++){
        for(var j = 0; j < n - i; j++){
            if(s[j] == s[j + i] && palin[j + 1][j + i - 1] == 1){
                palin[j][j + i] = 1;
            }
        }
    }
    
    var dp = new Array(n);
    for(var i = 0; i < n; i++){
        dp[i] = new Array(3).fill(0);
    }   
    for(var i = 0; i < n; i++){
        if(palin[0][i] == 1){
            dp[i][0] = 1;
        }
    }
    for(var i = 0; i < n; i++){
        if(dp[i][0] == 1){
            for(var j = i + 1; j < n; j++){
                if(palin[i + 1][j] == 1){
                    dp[j][1] = 1;
                }
            }
        }
    }
    for(var i = 0; i < n; i++){
        if(dp[i][1] == 1){
            for(var j = i + 1; j < n; j++){
                if(palin[i + 1][j] == 1){
                    dp[j][2] = 1;
                }
            }
        }
    }
    return dp[n - 1][2];
};