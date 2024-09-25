/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let len = arr.length;
    let prefix = new Array(len + 1).fill(0);
    for(let i = 1; i <= len; i++){
        prefix[i] = arr[i - 1] ^ prefix[i - 1];
    }
    let answer = [];
    let query_len = queries.length;
    for(let i = 0; i < query_len; i++){
        answer.push(prefix[queries[i][1] + 1] ^ prefix[queries[i][0]]);
    }
    return answer;
};