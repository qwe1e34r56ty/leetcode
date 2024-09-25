/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    intervals.sort(function(a, b){return (a[1] - a[0]) - (b[1] - b[0]);});
    queries = queries.map(function(a, b){ return [a, b]});
    queries.sort(function(a, b){return a[0] - b[0];});
    
    let i_len = intervals.length;
    let q_len = queries.length;
    let answer = new Array(q_len).fill(-1);
    
    let max = Math.pow(10, 9) + 7;
    queries.push([max, 0]);
    
    for(let i = 0; i < i_len; i++){
        let l = 0;
        let r = q_len;
        while(l < r){
            let m = Math.floor((l + r) / 2);
            if(queries[m][0] >= intervals[i][0]){
                r = m;
            }
            else{
                l = m + 1;
            }
        }
        while(queries[l][0] != max && queries[l][0] <= intervals[i][1]){
            answer[queries[l][1]] = intervals[i][1] - intervals[i][0] + 1;
            queries.splice(l, 1);
            q_len--;
        }
    }
    return answer;
};