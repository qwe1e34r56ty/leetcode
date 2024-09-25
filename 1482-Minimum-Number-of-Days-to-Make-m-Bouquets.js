/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let len = bloomDay.length;
    if(len < m * k){
        return -1;
    }
    let min = bloomDay[0];
    let max = bloomDay[0];
    for(let i = 0; i < len; i++){
        min = Math.min(min, bloomDay[i]);
        max = Math.max(max, bloomDay[i]);
    }
    let l = min;
    let r = max;
    while(l < r){
        let mid = (l + r) >> 1;
        let cur = 0;
        let count = 0;
        for(let i = 0; i < len; i++){
            if(bloomDay[i] > mid){
                count = 0;
            }
            else{
                count++;
            }
            if(count == k){
                cur++;
                count = 0;
            }
        }
        if(cur >= m){
            r = mid;
        }
        else{
            l = mid + 1;
        }
        //console.log(cur + ", " + l);
    }
    return l;
};