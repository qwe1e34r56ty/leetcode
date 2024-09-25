/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    let len = nums.length;
    let memo = new Array(1 << len).fill(-1);
    return dp(1, 0);
    function dp(index, mask){
        if(memo[mask] != -1){
            return memo[mask];
        }
        let first = 0;
        let second = 0;
        let ret = 0;
        for(let i = 0; i < len; i++){
            if(!(mask & (1 << i))){
                first = i;
                mask |= (1 << i);
                for(let j = 0; j < len; j++){
                    if(!(mask & (1 << j))){
                        second = j;
                        mask |= (1 << j);
                        ret = Math.max(ret, index * gcd(nums[first], nums[second]) + dp(index + 1, mask));
                        mask ^= (1 << j);
                    }
                }
                mask ^= (1 << i);
            }
        }
        memo[mask] = ret;
        return ret;
    }
    function gcd(i, j){
        let tmp = 0;
        do{
            if(i < j){
                tmp = i;
                i = j;
                j = tmp;
            }
        }while(i % j && (i %= j));
        return Math.min(i, j);
    }
};