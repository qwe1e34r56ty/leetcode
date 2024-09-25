/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    var arr_len = arr.length;
    var memo = new Array(arr_len).fill(-1);
    var answer = 0;
    function dp(i){
        var ret = 1;
        var left_less_max = -1;
        var right_less_max = -1;
        if(memo[i] != -1){
            return memo[i];
        }
        for(var j = i - 1; j >= Math.max(i - d, 0); j--){
            if(arr[i] > arr[j]){
                if(arr[j] >= left_less_max || left_less_max == -1){
                    left_less_max = arr[j];
                    ret = Math.max(ret, 1 + dp(j));
                }
            }
            else{
                break;
            }
        }
        for(var j = i + 1; j < Math.min(i + d + 1, arr_len); j++){
            if(arr[i] > arr[j]){
                if(arr[j] >= right_less_max || right_less_max == -1){
                    right_less_max = arr[j];
                    ret = Math.max(ret, 1 + dp(j));
                }
            }
            else{
                break;
            }
        }
        console.log(arr[i] + ", " + left_less_max + ", " + right_less_max);
        memo[i] = ret;
        return ret;
    }
    for(var i = 0; i < arr_len; i++){
        answer = Math.max(dp(i), answer);
    }
    return answer;
};