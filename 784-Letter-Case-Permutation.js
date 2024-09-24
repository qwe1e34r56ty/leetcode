/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    var answer = [];
    var str = "";
    bt(str, 0);
    return answer;
    function bt(str, i){
        if(i == s.length){
            answer.push(str);
            //console.log(i);
            return;
        }
        if(isUpperAlpha(s[i])){
            bt(str + s[i].toLocaleLowerCase(), i + 1);
            bt(str + s[i], i + 1);
            //console.log(i);
        }
        else if(isLowerAlpha(s[i])){
            bt(str + s[i], i + 1);
            bt(str + s[i].toLocaleUpperCase(), i + 1);
            //console.log(i);
        }
        else{
            bt(str + s[i], i + 1);
            //console.log(i);
        }
    }
    function isLowerAlpha(i){
        if(i.charCodeAt() > 96 && i.charCodeAt() < 123){
            return 1;
        }
        else{
            return 0;
        }
    }
    function isUpperAlpha(i){
        if(i.charCodeAt() > 64 && i.charCodeAt() < 91){
            return 1;
        }
        else{
            return 0;
        }
    }
};