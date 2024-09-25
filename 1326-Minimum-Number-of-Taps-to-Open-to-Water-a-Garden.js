/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    ranges = ranges.map(function(e, i){return [Math.max(0, i - e), Math.min(n, i + e)]});
    ranges.sort((a, b) => a[0] - b[0]);
    let len = ranges.length;
    let memo = new Array(n + 1).fill(n + 1);
    memo[0] = 0;
    for(let i = 0; i < len; i++){
        memo[ranges[i][1]] = Math.min(memo[ranges[i][1]], memo[ranges[i][0]] + 1);
        for(let j = ranges[i][1]; j >= ranges[i][0]; j--){
            memo[j] = Math.min(memo[j], memo[ranges[i][1]]);
        }
    }
    if(memo[n] == n + 1){
        return -1;
    }
    return memo[n];
};