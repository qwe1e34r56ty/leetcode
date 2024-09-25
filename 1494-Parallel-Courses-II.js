/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function(n, relations, k) {
    let dep = new Array(n).fill(0);
    let len = relations.length;
    for(let i = 0; i < len; i++){
        relations[i][0]--;
        relations[i][1]--;
        dep[relations[i][1]] |= (1 << relations[i][0]);
    }
    let dp = new Array(1 << n).fill(16);
    dp[0] = 0;
    let bit_counts = new Array(1 << n);
    for(let i = 0; i < (1 << n); i++){
        bit_counts[i] = bit_count(i);
    }
    for(let i = 0; i < (1 << n); i++){
        let ex = 0;
        for(let j = 0; j < n; j++){
            if((dep[j] & i) == dep[j]){
                ex |= (1 << j);
            }
        }
        ex &= ~i;
        for(let j = ex; j > 0; j = (j - 1) & ex){
            if(bit_counts[j] <= k){
                dp[i | j] = Math.min(dp[i | j], dp[i] + 1);
            }
        }
    }
    //console.log(dp);
    return dp[(1 << n) - 1];
    
    function bit_count(num){
        let count = 0;
        for(let i = 0; i < 16; i++){
            count += (num & 1);
            num >>= 1;
        }
        return count;
    }
};