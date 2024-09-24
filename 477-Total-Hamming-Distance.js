/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let answer = 0;
    let len = nums.length;
    for(let i = 0; i < 32; i++){
        let count = 0;
        for(let j = 0; j < len; j++){
            if((nums[j] >> i) & 1){
                count++;
            }
        }
        answer += count * (len - count);
    }
    return answer;
};