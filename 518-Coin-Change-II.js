/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    var dp = new Array(amount + 1).fill(0);
    var coin_total = coins.length;
    dp[0] = 1;
    for(var j = 0; j < coin_total; j++){
        for(var i = 1; i < amount + 1; i++){
            if(coins[j] <= i){
                dp[i] += dp[i - coins[j]];
            }
        }
    }
    //console.log(dp);
    return dp[amount];
};