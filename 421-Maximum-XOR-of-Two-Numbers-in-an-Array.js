/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let answer = 0;
    let goal = 0;
    let set;
    let len = nums.length;
    for(let i = 31; i >= 0; i--){
        set = [];
        goal = answer | (1 << i);
        for(let j = 0; j < len; j++){
            set[key(goal & nums[j])] = goal & nums[j];
        }
        for(let j in set){
            if(set[key(goal ^ set[j])] != undefined){
                answer = goal;
                break;
            }
        }
    }
    return answer;
    
    function key(i){
        return "^" + i;
    }
};