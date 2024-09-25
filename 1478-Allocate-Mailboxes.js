/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
    houses.sort(function(a, b){return a - b;});
    let len = houses.length;
    let memo = new Array(len);
    let max = Math.pow(10, 10);
    for(let i = 0; i < len; i++){
        memo[i] = new Array(len);
        for(let j = 0; j < len; j++){
            memo[i][j] = new Array(k + 1).fill(max);
        }
    }
    return dp(0, len - 1, k);
    function dp(start, end, k){
        if(start > end){
            return 0;
        }
        if(k == 0){
            return max;
        }
        if(memo[start][end][k] != max){
            return memo[start][end][k];
        }
        let ret = max;
        if(k == 1){
            ret = 0;
            let mid = Math.floor((start + end) / 2);
            for(let i = start; i <= end; i++){
                ret += Math.abs(houses[i] - houses[mid]);
            }
            memo[start][end][k] = ret;
            return ret;
        }
        else{
            for(let i = start; i <= end; i++){
                ret = Math.min(ret, dp(start, i, 1) + dp(i + 1, end, k - 1));
            }
            memo[start][end][k] = ret;
            return ret;
        }
    }
};