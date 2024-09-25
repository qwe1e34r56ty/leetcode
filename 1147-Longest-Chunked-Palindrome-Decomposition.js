/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    var start = 0;
    var end = text.length - 1;
    var l = "";
    var r = "";
    var answer = 0;
    for(;start < text.length; start++, end--){
        l = l + text[start];
        r = text[end] + r;
        if(l.localeCompare(r) == 0){
            answer++;
            l = "";
            r = "";
        }
    }
    return answer;
}