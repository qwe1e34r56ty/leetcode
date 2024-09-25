/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    let len = jobs.length;
    let memo = new Array(k);
    for(let i = 0; i < k; i++){
        memo[i] = new Array(1 << len).fill(Infinity);
    }
    return dp(0, 0);
    function dp(index, state){
        if(state == (1 << len) - 1){
            return 0;
        }
        if(index == k){
            return Infinity;
        }
        if(memo[index][state] != Infinity){
            return memo[index][state];
        }
        let ret = Infinity;
        for(let tmp = ((1 << len) - 1) & (~state), cur = 0; tmp > 0; tmp = (~state) & (tmp - 1)){
            for(let i = 0; i < len; i++){
                if((1 << i) & tmp){
                    cur += jobs[i];
                }
            }
            ret = Math.min(ret, Math.max(cur, dp(index + 1, state | tmp)));
            cur = 0;
        }
        memo[index][state] = ret;
        return ret;
    }
};