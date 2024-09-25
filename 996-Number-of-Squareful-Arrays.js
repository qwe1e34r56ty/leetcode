/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function(nums) {
    let len = nums.length;
    let memo = new Array(len);
    nums.sort();
    let dup = 1;
    let tmp = 1;
    for(let i = 1; i < len; i++){
        if(nums[i] == nums[i - 1]){
            dup *= (++tmp);
        }
        else{
            tmp = 1;
        }
    }
    console.log(dup);
    for(let i = 0; i < len; i++){
        memo[i] = new Array(1 << len).fill(-1);
        memo[i][1 << i] = 1;
    }
    let ans = 0;
    for(let i = 0; i < len; i++){
        ans += dp(i, (1 << len) - 1);
    }
    console.log(ans);
    return ans / dup;
    
    function dp(last, cur){
        if(memo[last][cur] != -1){
            return memo[last][cur];
        }
        let ret = 0;
        let prev = cur ^ (1 << last);
        for(let i = 0; i < len; i++){
            if((1 << i) & prev){               
                if(issquare(nums[last] + nums[i])){
                    ret += dp(i, prev);
                }
            }
        }
        memo[last][cur] = ret;
        return ret;
    }
    function issquare(i){
        return Math.floor(Math.sqrt(i)) == Math.sqrt(i);
    }
};