/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    let len = arr.length;
    let non_leaf_sum = new Array(len);
    for(let i = 0; i < len; i++){
        non_leaf_sum[i] = new Array(len).fill(0);
    }
    let max_leaf = new Array(len);
    for(let i = 0; i < len; i++){
        max_leaf[i] = new Array(len).fill(0);
        max_leaf[i][i] = arr[i];
    }
    for(let i = 1; i < len; i++){
        for(let j = 0; j < len - i; j++){
            max_leaf[j][j + i] = Math.max(max_leaf[j][j + i - 1], arr[j + i]);
        }
    }
    for(let i = 0; i < len - 1; i++){
        non_leaf_sum[i][i + 1] = arr[i] * arr[i + 1];
    }
    for(let i = 2; i < len; i++){
        for(let j = 0; j < len - i; j++){
            for(let k = j; k < j + i; k++){
                if(non_leaf_sum[j][j + i] == 0){
                    non_leaf_sum[j][j + i] = 100000000000;
                }
                non_leaf_sum[j][j + i] = Math.min(non_leaf_sum[j][j + i], non_leaf_sum[j][k] + non_leaf_sum[k + 1][j + i] + max_leaf[j][k] * max_leaf[k + 1][j + i]);
            }
        }
    }
    //console.log(non_leaf_sum);
    return non_leaf_sum[0][len - 1];
};