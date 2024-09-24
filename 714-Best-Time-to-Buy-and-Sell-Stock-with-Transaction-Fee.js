/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    var dp = new Array(prices.length);
    var max = (a, b) => (a > b) ? a : b;
    for(var i = 0; i < prices.length; i++){
        dp[i] = new Array(2).fill(0);
    }
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for(var i = 1; i < prices.length; i++){
        dp[i][0] = max(dp[i - 1][1] - prices[i], dp[i - 1][0]);
        dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
    }
    return dp[prices.length - 1][1];
};