/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    var last_day = days[days.length - 1];
    var dp = new Array(last_day + 1);
    var answer = Infinity;
    for(var i = 0; i < last_day + 1; i++){
        dp[i] = new Array(31).fill(Infinity);
    }
    var k = 0;
    dp[0][0] = 0;
    for(var i = 1; i < last_day + 1; i++){
        if(i == days[k]){
            for(var j = 0; j < 30; j++){
                if(dp[i - 1][j + 1] != Infinity){
                    dp[i][j] = dp[i - 1][j + 1];
                }
            }
            if(dp[i - 1][0] != Infinity){
                dp[i][0] = Math.min(dp[i][0], dp[i - 1][0] + costs[0]);
                dp[i][6] = Math.min(dp[i][6], dp[i - 1][0] + costs[1]);
                dp[i][29] = Math.min(dp[i][29], dp[i - 1][0] + costs[2]);
            }
            k++;
        }
        else{
            for(var j = 0; j < 30; j++){
                if(dp[i - 1][j + 1] != Infinity){
                    dp[i][j] = dp[i - 1][j + 1];
                }
            }
            dp[i][0] = Math.min(dp[i - 1][0], dp[i][0]);
        }
    }
    for(var i = 0; i < 30; i++){
        answer = Math.min(answer, dp[last_day][i]);
    }
    return answer;
};