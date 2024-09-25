/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.pow(10, 9) + 7;
    while(low < high){
        let mid = Math.floor((low + high) / 2);
        if(valid(mid)){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
    
    function valid(k){
        let count = 0;
        let len = piles.length;
        for(let i = 0; i < len; i++){
            count += Math.floor(piles[i] / k);
            count += (piles[i] != Math.floor(piles[i] / k) * k);
        }
        return count <= h;
    }
};