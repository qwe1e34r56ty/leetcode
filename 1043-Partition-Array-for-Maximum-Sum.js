/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    let len = arr.length;
    let max = Math.max;
    let min = Math.min;
    let max_value = new Array(len);
    for(let i = 0; i < len; i++){
        max_value[i] = new Array(len);
        max_value[i][i] = arr[i];
    }
    for(let i = 1; i < len; i++){
        for(let j = 0; j < len - i; j++){
            max_value[j][j + i] = max(max_value[j][j + i - 1], arr[j + i]);
        }
    }
    let asc = new Array(len).fill(0);
    asc[0] = arr[0];
    for(let i = 1; i < len; i++){
        for(let j = max(-1, i - k); j < i; j++){
            asc[i] = max(asc[i], ((j >= 0) ? asc[j] : 0) + max_value[j + 1][i] * (i - j));
        }
    }
    //console.log(asc);
    return asc[len - 1];
};