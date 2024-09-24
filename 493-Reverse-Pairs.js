/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let arr = [Infinity];
    let arr_len = 1;
    let nums_len = nums.length;
    let answer = 0;
    for(let i = 0; i < nums_len; i++){
        let l = 0;
        let r = arr_len;
        while(l < r){
            let m = Math.floor((l + r) / 2);
            if(arr[m] <= 2 * nums[i]){
                l = m + 1;
            }
            else{
                r = m;
            }
        }
        answer += arr_len - 1 - l;
        l = 0;
        r = arr_len - 1;
        while(l < r){
            let m = Math.floor((l + r) / 2);
            if(arr[m] < nums[i]){
                l = m + 1;
            }
            else{
                r = m;
            }
        }
        arr.splice(l, 0, nums[i]);
        arr_len++;
        //console.log(arr);
        //console.log(answer);
    }
    return answer;
};