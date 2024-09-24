/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    var sorted = pairs.sort(function(a, b){ return a[1] - b[1] });
    var cur = Number.MIN_SAFE_INTEGER;
    var answer = 0;
    for(var i = 0; i < pairs.length; i++){
        if(cur < pairs[i][0]){
            cur = pairs[i][1];
            answer++;
        }
    }
    console.log(sorted);
    return answer;
};