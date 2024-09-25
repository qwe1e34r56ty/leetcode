/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let len = arr.length;
    let first = 0;
    let second = len - 1;
    for(let i = 1; i < len; i++){
        if(arr[i] >= arr[i - 1])
            first++;
        else{
            break;
        }
    }
    for(let i = len - 2; i >= 0; i--){
        if(arr[i] <= arr[i + 1])
            second--;
        else
            break;
    }
    if(first == len - 1){
        return 0;
    }
    let ans = len - 1;
    ans = Math.min(ans, len - first - 1);
    ans = Math.min(ans, second);
    for(let i = 0; i <= first; i++){
        let l = second;
        let r = len - 1;
        while(l < r){
            let m = (l + r) >> 1;
            if(arr[m] >= arr[i]){
                r = m;
            }
            else{
                l = m + 1;
            }
        }
        if(arr[l] >= arr[i]){
            ans = Math.min(ans, (l - i - 1)); 
        }
    }
    return ans;
};