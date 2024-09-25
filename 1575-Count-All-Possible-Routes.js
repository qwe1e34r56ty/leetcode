/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    var locate_len = locations.length;
    var dp = new Array(locate_len);
    var mod = Math.pow(10, 9) + 7;
    var answer = 0;
    for(var i = 0; i < locate_len; i++){
        dp[i] = new Array(fuel + 1).fill(0);
    }
    dp[start][fuel] = 1;
    for(var j = fuel; j >= 0; j--){
        for(var i = 0, cost = 0; i < locate_len; i++){
            for(var k = 0; k < locate_len; k++){
                if(i != k){
                    cost = Math.abs(locations[i] - locations[k]);
                    if(j + cost <= fuel){
                        dp[i][j] += dp[k][j + cost];
                        dp[i][j] %= mod;
                    }
                }
            }
        }
    }
    for(var i = fuel; i >= 0; i--){
        answer += dp[finish][i];
        answer %= mod;
    }
    return answer;
};