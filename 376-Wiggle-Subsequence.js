/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    var up = new Array(nums.length).fill(1);
    var down = new Array(nums.length).fill(1);
    if(nums.length == 0){
        return 0;
    }
    var answer = 1;
    var max = (a, b) => (a > b) ? a : b;
    for(var i = 1; i < nums.length; i++){
        if(nums[i] > nums[i - 1]){
            up[i] = max(up[i], down[i - 1] + 1);
            down[i] = max(down[i], down[i - 1]);
        }
        else if(nums[i] < nums[i - 1]){
            up[i] = max(up[i], up[i - 1]);
            down[i] = max(down[i], up[i - 1] + 1);
        }
        else{
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }    
    return max(down[nums.length - 1], up[nums.length - 1]);
};