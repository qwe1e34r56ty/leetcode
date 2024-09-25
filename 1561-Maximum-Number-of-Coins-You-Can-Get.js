/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles = piles.sort((a, b) => a - b);
    let start = 0;
    let end = piles.length - 1;
    let ans = 0;
    while(start <= end){
        ans += piles[end - 1];
        start++;
        end -= 2;
    }
    return ans;
};