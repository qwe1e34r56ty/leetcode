/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    let memo = [0];
    let tmp = [];
    let m = mat.length;
    let n = mat[0].length;
    let size = k;
    for(let i = 0; i < m; i++){
        let memo_len = memo.length;
        for(let j = 0; j < n; j++){
            for(let k = 0; k < memo_len; k++){
                tmp.push(memo[k] + mat[i][j]);
            }
        }
        tmp.sort((a, b) => a - b);
        memo = tmp.slice(0, size);
        tmp = [];
    }
    return memo[k - 1];
};