/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
    var a_len = A.length;
    var k_len = K;
    var max = (a, b) => (a > b) ? a : b;
    
    var av = new Array(a_len);
    for(var i = 0; i < a_len; i++){
        av[i] = new Array(a_len).fill(0);
    }    
    for(var i = 0; i < a_len; i++){
        av[i][i] = A[i];
    }
    for(var i = 0; i < a_len - 1; i++){
        av[i][i + 1] = (A[i] + A[i + 1]) / 2;
    }
    for(var i = 2; i < a_len; i++){
        for(var j = 0; j < a_len - i; j++){
            av[j][j + i] = (av[j + 1][j + i - 1] * (i - 1) + A[j] + A[j + i]) / (i + 1)
        }
    }
    
    var dp = new Array(a_len);
    for(var i = 0; i < a_len; i++){
        dp[i] = new Array(K).fill(0);
    } 
    for(var i = 0; i < a_len; i++){
        dp[i][0] = av[0][i];
    }
    for(var i = 1; i < K; i++){
        for(var j = 0; j < a_len; j++){
            for(var k = 0; k < j; k++){
                dp[j][i] = max(dp[j][i], dp[k][i - 1] + av[k + 1][j]);
            }
        }
    }
    console.log(dp);
    return dp[a_len - 1][K - 1];
};