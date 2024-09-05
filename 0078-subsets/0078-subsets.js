/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let len = nums.length;
    let answer = new Array(1 << len);
    for(let i = 0; i < (1 << len); i++){
        answer[i] = new Array();
    }
    for(let i = 0; i < (1 << len); i++){
        for(let j = 0; j < len; j++){
            if(i & (1 << j)){
                answer[i].push(nums[j]);
            }
        }
    }
    return answer;
};