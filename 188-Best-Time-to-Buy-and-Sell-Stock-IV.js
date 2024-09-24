/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function max(a, b){
    return (a > b) ? a : b;
}

var maxProfit = function(k, prices) {
    if(prices.length == 0 || k == 0){
        return 0;
    }
    var small = -100000000;
    var dp = new Array(prices.length);
    for(var i = 0; i < prices.length; i++){
        dp[i] = new Array(k + 1);
        for(var j = 0; j < k + 1; j++){
            dp[i][j] = new Array(2);
            dp[i][j][0] = 0;
            dp[i][j][1] = 0;
        }
    }
    dp[0][1][1] = -prices[0];
    for(var i = 2; i < k + 1; i++){
        dp[0][i][1] = -prices[0];
    }
    for(var i = 1; i < prices.length; i++){
        for(var j = 1; j < k + 1; j++){
            dp[i][j][0] = max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            if(j > 0) dp[i][j][1] = max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
        }
    }
    return dp[prices.length - 1][k][0];
};