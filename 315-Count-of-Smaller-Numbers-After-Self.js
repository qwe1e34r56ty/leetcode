/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let len = nums.length;
    let answer = new Array(len).fill(0);
    let help = [-Math.pow(10, 9)];
    let help_len = 1;
    for(let i = len - 1; i >= 0; i--){
        let l = 0;
        let r = help_len - 1;
        do{
            let m = Math.floor((l + r + 1) / 2);
            if(help[m] < nums[i]){
                l = m;
            }
            else{
                r = m - 1;
            }
        }while(l < r);
        help.splice(l + 1, 0, nums[i]);
        help_len++;
        answer[i] = l;
        if(help[l] == help[l + 1]){
            answer[i]--;
        }
    }
    return answer;
};