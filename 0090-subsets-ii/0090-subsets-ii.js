/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let len = nums.length;
    let answer = [];
    let map = [];
    nums.sort();
    for(let i = 0, tmp = []; i < (1 << len); i++){
        for(let j = 0; j < len; j++){
            if(i & (1 << j)){
                tmp.push(nums[j]);
            }
        }
        if(map[tmp] == undefined){
            answer.push(tmp);
            map[tmp] = 1;
        }
        tmp = [];
    }
    return answer;
};