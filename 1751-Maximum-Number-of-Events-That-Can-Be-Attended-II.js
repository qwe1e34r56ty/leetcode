/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    let min = -(Math.pow(10, 9) + 7);
    events.sort(function(a, b){return a[1] - b[1];});
    let len = events.length;
    let memo = new Array(k + 1);
    for(let i = 0; i < k + 1; i++){
        memo[i] = [[min, 0]];
    }
    for(let i = 1; i < k + 1; i++){
        for(let j = 0; j < len; j++){
            let l = 0;
            let r = memo[i - 1].length - 1;
            while(l < r){
                let m = (l + r + 1) >> 1;
                if(events[j][0] > memo[i - 1][m][0]){
                    l = m;
                }
                else{
                    r = m - 1;
                }
            }
            memo[i].push([events[j][1], events[j][2] + memo[i - 1][l][1]]);
            memo[i][j + 1][1] = Math.max(memo[i][j + 1][1], memo[i][j][1]);
        }
    }
    //console.log(memo);
    //console.log(events);
    return memo[k][len][1];
};