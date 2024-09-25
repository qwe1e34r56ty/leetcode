/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    arr2.sort(function(a, b){return a - b;});
    var arr1_len = arr1.length;
    var arr2_len = arr2.length;
    var dp = new Array(arr1_len);
    var answer = Infinity;
    for(var i = 0; i < arr1_len; i++){
        dp[i] = new Array(arr2_len + 1).fill(Infinity);
    }
    dp[0][0] = arr1[0];
    dp[0][1] = arr2[0];
    for(var i = 1, tmp = 0; i < arr1_len; i++){
        for(var j = 0; j < arr2_len + 1; j++){
            if(arr1[i] > dp[i - 1][j]){
                dp[i][j] = Math.min(dp[i][j], arr1[i]);
            }
            if(j > 0){
                tmp = bin_search(arr2, 0, arr2_len, dp[i - 1][j - 1]);
                if(tmp < arr2_len){
                    dp[i][j] = Math.min(dp[i][j], arr2[tmp]);
                }
            }
        }
    }
    for(var i = 0; i < arr2_len + 1; i++){
        if(dp[arr1_len - 1][i] != Infinity){
            answer = i;
            break;
        }
    }
    if(answer == Infinity){
        return -1;
    }
    return answer;
};

function bin_search(arr, start, end, i){
    var mid = start + Math.floor((end - start) >> 1);
    while(start <= end){
        if(arr[mid] <= i){
            start = mid + 1;
            mid = start + Math.floor((end - start) >> 1);
        }
        else{
            end = mid - 1;
            mid = start + Math.floor((end - start) >> 1);
        }
    }
    return start;
}