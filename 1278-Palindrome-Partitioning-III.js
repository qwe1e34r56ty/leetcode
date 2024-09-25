/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
    var n = s.length;
    var palin = new Array(n);
    var min = (a, b) => (a < b) ? a : b;
    for(var i = 0; i < n; i++){
        palin[i] = new Array(n).fill(0);
    }
    for(var i = 0; i < n - 1; i++){
        if(s[i] != s[i + 1]){
            palin[i][i + 1] = 1;
        }
    }
    for(var i = 2; i < n; i++){
        for(var j = 0; j < n - i; j++){
            if(s[j] == s[j + i]){
                palin[j][j + i] = palin[j + 1][j + i - 1];
            }
            else{
                palin[j][j + i] = palin[j + 1][j + i - 1] + 1;
            }
        }
    }
       
    var dp = new Array(n);
    for(var i = 0; i < n; i++){
        dp[i] = new Array(k).fill(500);
    }
    
    for(var i = 0; i < n; i++){
        dp[i][0] = palin[0][i];
    }
    for(var m = 1; m < k; m++){
        for(var i = 0; i < n; i++){
            for(var j = i + 1; j < n; j++){
                dp[j][m] = min(dp[j][m], dp[i][m - 1] + palin[i + 1][j]);
            }
        }
    }
    console.log(dp);
    return dp[n - 1][k - 1];
};