/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function(nums) {
    let mod = Math.pow(10, 9) + 7;
    let zero = 0;
    let one = 0;
    let two = 0;
    let len = nums.length;
    for(let cur of nums){
        if(cur == 0){
            zero = zero * 2 + 1;
            zero %= mod;
        }
        else if(cur == 1){
            one = one * 2 + zero;
            one %= mod;
        }
        else{
            two = two * 2 + one;
            two %= mod;
        }
    }
    return two;
};