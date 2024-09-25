/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function(destination, k) {
    var str = "";
    return dp(str, k, destination[1], destination[0]);
    function dp(str, k, H, V){
        if(H + V == 0){
            return str;
        }
        if(H > 0 && comb(H + V - 1, H - 1) >= k){
            str += "H";
            return dp(str, k, H - 1, V);
        }
        else{
            str += "V";
            return dp(str, k - comb(H + V - 1, H - 1), H, V - 1);
        }
    }
};

function comb(n, r){
    var ret = 1;
    for(var i = n; i > n - r; i--){
        ret *= i;
    }
    for(var i = r; i >= 1; i--){
        ret /= i;
    }
    return ret;
}