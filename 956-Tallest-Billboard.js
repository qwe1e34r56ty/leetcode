/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    var rod_len = rods.length;
    var max = 5001;
    var dp = new Array(rod_len);
    for(var i = 0; i < rod_len; i++){
        dp[i] = new Array(max).fill(-1);
    }
    for(var i = 0; i < rod_len; i++){
        dp[i][0] = 0;
    }
    dp[0][rods[0]] = rods[0];
    for(var i = 1; i < rod_len; i++){
        for(var j = 0; j < max; j++){
            if(dp[i - 1][Math.abs(j - rods[i])] != -1){
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][Math.abs(j - rods[i])] + rods[i]);
            }
            if(j + rods[i] <= 5000 && dp[i - 1][j + rods[i]] != -1){
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j + rods[i]] + rods[i]);
            }
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        }
    }
    //console.log(dp);
    return dp[rod_len - 1][0] / 2;
};