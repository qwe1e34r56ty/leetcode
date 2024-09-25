/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let a = 0;
    let b = 0;
    let len = s.length;
    for(let i = 0; i < len; i++){
        if(s[i] == 'a'){
            a++;
        }
        else{
            b = Math.max(a + 1, b + 1);
        }
    }
    return Math.min(len - a, len - b);
};