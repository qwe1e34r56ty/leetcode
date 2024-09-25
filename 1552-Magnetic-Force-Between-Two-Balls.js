/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort(function(a, b){return a - b;});
    let len = position.length;
    let l = 0;
    let r = position[len - 1] - position[0];
    while(l < r){
        let d = (l + r + 1) >> 1;
        if(count(d) >= m){
            l = d;
        }
        else{
            r = d - 1;
        }
    }
    return l;
    
    function count(l){
        let ans = 1;
        let cur = position[0];
        for(let i = 1; i < len; i++){
            if(position[i] - cur >= l){
                cur = position[i];
                ans++;
            }
        }
        return ans;
    }
};