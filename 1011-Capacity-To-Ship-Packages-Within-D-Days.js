/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let len = weights.length;
    let l = weights[0];
    let r = weights[0];
    for(let i = 1; i < len; i++){
        l = Math.max(l, weights[i]);
        r += weights[i];
    }
    while(l < r){
        let m = (l + r) >> 1;
        let cur = 0;
        let count = 1;
        for(let i = 0; i < len; i++){
            if(cur + weights[i] > m){
                cur = weights[i];
                count++;
            }
            else{
                cur += weights[i];
            }
        }
        if(count > days){
            l = m + 1;
        }
        else{
            r = m;
        }
    }
    return l;
};