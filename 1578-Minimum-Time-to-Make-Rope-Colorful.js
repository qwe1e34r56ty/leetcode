/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let sum = 0;
    let len = s.length;
    for(let i = 0; i < len; i++){
        sum += cost[i];
    }
    let sub = cost[0];
    let prev = s[0];
    let last = cost[0];
    for(let i = 1; i < len; i++){
        if(s[i] != prev){
            sub += cost[i];
            last = cost[i];
        }
        else{
            sub -= last;
            last = Math.max(last, cost[i]);
            sub += last;
        }
        prev = s[i];
    }
    return sum - sub;
};