/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function(nums1, nums2) {
    let n = nums1.length;
    let max = Math.pow(10, 9) + 7;
    let dp = new Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = new Array(1 << n).fill(max);
        dp[i][0] = 0;
    }
    for(let i = 0; i < n; i++){
        dp[0][1 << i] = nums1[0] ^ nums2[i];
    }
    for(let i = 1; i < n; i++){
        for(let j = 0; j < n; j++){
            let ex = ((1 << n) - 1) & (~(1 << j));
            //console.log(i + ", " + j + ", " + ex);
            for(let k = ex; k > 0; k = (k - 1) & ex){
                dp[i][k | (1 << j)] = Math.min(dp[i][k | (1 << j)], dp[i - 1][k] + (nums1[i] ^ nums2[j]));
                //console.log("    " + (k | (1 << j)));
            }
        }
    }
    //console.log(dp);
    return dp[n - 1][(1 << n) - 1];
};