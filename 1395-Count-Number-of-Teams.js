/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let ans = 0;
    let len = rating.length;
    let asc = new Array(len);
    for(let i = 0; i < len; i++){
        asc[i] = new Array(2).fill(0);
        asc[i][0] = 1;
    }
    let desc = new Array(len);
    for(let i = 0; i < len; i++){
        desc[i] = new Array(2).fill(0);
        desc[i][0] = 1;
    }
    asc[0][1] = 0;
    desc[0][1] = 0;
    for(let i = 1; i < len; i++){
        for(let j = 0; j < i; j++){
            if(rating[i] < rating[j]){
                asc[i][1]++;
                ans += asc[j][1];
            }
            if(rating[i] > rating[j]){
                desc[i][1]++;
                ans += desc[j][1];
            }
        }
    }
    return ans;
};