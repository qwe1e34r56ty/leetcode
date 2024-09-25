/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    let len = obstacles.length;
    let ans = new Array(len).fill(0);
    let memo = new Array(len + 1).fill(Math.pow(10, 7) + 1);
    memo[0] = 0;
    let memo_len = 1;
    for(let i = 0; i < len; i++){
        let l = 0;
        let r = len;
        while(l < r){
            let m = (l + r + 1) >> 1;
            if(memo[m] > obstacles[i]){
                r = m - 1;
            }
            else{
                l = m;
            }
        }
        memo[l + 1] = Math.min(memo[l + 1], obstacles[i]);
        ans[i] = l + 1;
    }
    return ans;
};