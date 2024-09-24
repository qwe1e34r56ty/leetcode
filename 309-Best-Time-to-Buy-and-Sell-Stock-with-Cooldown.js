/**
 * @param {number[]} prices
 * @return {number}
 */
var dp;

var maxProfit = function(prices) {
    if(prices.length == 0){
        return 0;
    }
    dp = new Array(prices.length);
    for(var i = 0; i < prices.length; i++){
        dp[i] = new Array(3);
        dp[i][0] = 0;
        dp[i][1] = 0;
        dp[i][2] = 0;
    }
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    dp[0][2] = 0;
    for(var i = 1; i < prices.length; i++){
        dp[i][2] = (dp[i - 1][0] + prices[i] > dp[i - 1][2]) ? dp[i - 1][0] + prices[i] : dp[i - 1][2];
        dp[i][1] = dp[i - 1][2];
        dp[i][0] = (dp[i - 1][0] > dp[i - 1][1] - prices[i]) ? dp[i - 1][0] : dp[i - 1][1] - prices[i];
    }
    return (dp[prices.length - 1][2] > dp[prices.length - 1][1]) ? dp[prices.length - 1][2] : dp[prices.length - 1][1];
};