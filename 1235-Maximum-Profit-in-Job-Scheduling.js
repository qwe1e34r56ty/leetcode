/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let max = Math.pow(10, 9) + 7;
    let dp = [[max, 0]];
    let len = startTime.length;
    let tmp = [];
    for(let i = 0; i < len; i++){
        tmp.push([startTime[i], endTime[i], profit[i]]);
    }
    tmp.sort(function(a, b){return a[0] - b[0]});
    startTime = [];
    endTime = [];
    profit = [];
    for(let i = 0; i < len; i++){
        startTime.push(tmp[i][0]);
        endTime.push(tmp[i][1]);
        profit.push(tmp[i][2]);
    }
    //console.log(startTime);
    //console.log(endTime);
    for(let i = len - 1; i >= 0; i--){
        let bound = upper_bound(endTime[i], dp);
        dp.unshift([startTime[i], profit[i] + dp[bound][1]]);
        dp[0][1] = Math.max(dp[0][1], dp[1][1]);
    }
    //console.log(dp);
    return dp[0][1];
    
    function upper_bound(val, arr){
        let low = 0;
        let high = arr.length - 1;
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if(arr[mid][0] >= val){
                high = mid;
            }
            else{
                low = mid + 1;
            }
        }
        return low;
    }
};