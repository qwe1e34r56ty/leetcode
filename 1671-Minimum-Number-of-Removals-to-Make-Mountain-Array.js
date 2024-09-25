/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    var len = nums.length;
    var answer = len;
    var asc = new Array(len).fill(1);
    var desc = new Array(len).fill(1);
    for(var i = 1; i < len; i++){
        for(var j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                asc[i] = Math.max(asc[i], asc[j] + 1);
            }
        }
    }
    for(var i = len - 1; i >= 0; i--){
        for(var j = len - 1; j > i; j--){
            if(nums[i] > nums[j]){
                desc[i] = Math.max(desc[i], desc[j] + 1);
            }
        }
    }
    for(var i = 0; i < len; i++){
        for(var j = i + 1; j < len; j++){
            if(asc[i] != 1 && nums[i] > nums[j]){
                answer = Math.min(answer, len - asc[i] - desc[j]);
            }
        }
    }
    //answer = Math.min(answer, len - desc[0]);
    //console.log(asc);
    //console.log(desc);
    return answer;
};