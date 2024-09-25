/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    let memo = [];
    function dp(i){
        if(i <= 0){
            return 0;
        }
        if(i == 1){
            return 1;
        }
        if(memo["+" + i] != undefined){
            return memo["+" + i];
        }
        let ret = 1 + Math.min(i % 2 + dp(Math.floor(i / 2)), i % 3 + dp(Math.floor(i / 3)));
        memo["+" + i] = ret;
        return ret;
    }
    //dp(n);
    //console.log(memo);
    return dp(n);
};