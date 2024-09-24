/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let arr = new Array(n * n);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            arr[n * i + j] = matrix[i][j];
        }
    }
    arr.sort((a, b) => a - b);
    //console.log(arr);
    return arr[k - 1];
};