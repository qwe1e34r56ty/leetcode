/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
    let dp = new Array(target + 1).fill(-10000);
    dp[0] = 0;
    let len = cost.length;
    for(let i = 0; i < target + 1; i++){
        for(let j = 0; j < len; j++){
            dp[i] = Math.max(dp[i], (i >= cost[j]) ? 1 + dp[i - cost[j]] : -10000);
        }
    }
    let answer = "";
    if(dp[target] < 0){
        return "0";
    }
    for(let i = target; i > 0;){
        for(let j = len - 1; j >= 0; j--){
            if(i - cost[j] >= 0 && dp[i - cost[j]] == dp[i] - 1){
                console.log(i);
                answer += (1 + j);
                i = i - cost[j];
                break;
            }
        }
    }
    return answer;
};