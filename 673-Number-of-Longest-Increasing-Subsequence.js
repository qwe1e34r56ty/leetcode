/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    var n_len = nums.length;
    var length = new Array(n_len).fill(1);
    var counts = new Array(n_len).fill(1);
    var max_len = 1;
    var answer = 0;
    
    for(var i = 0; i < n_len; i++){
        for(var j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                if(length[j] + 1 > length[i]){
                    length[i] = length[j] + 1;
                    counts[i] = counts[j];
                }
                else if(length[j] + 1 == length[i]){
                    counts[i] += counts[j];
                }
            }
        }
        if(max_len == length[i]){
            answer += counts[i];
        }
        else if(max_len < length[i]){
            max_len = length[i];
            answer = counts[i];
        }
    }
    console.log(counts);
    console.log(length);
    console.log(max_len);
    return answer;
};