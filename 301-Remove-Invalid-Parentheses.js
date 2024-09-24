/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    var answer = [];
    remove(0, 0, answer, s, [')', '(']);
    return answer;
};

function remove(last_i, last_j, ans, s, par){
    var stack = 0;
    for(var i = last_i; i < s.length; i++){
        if(s[i] == par[0]) stack--;
        else if(s[i] == par[1]) stack++;
        if(stack >= 0) continue;
        for(var j = last_j; j <= i; j++){
            if(s[j] == par[0] && (j == last_j || s[j - 1] != par[0])){
                remove(i, j, ans, s.slice(0, j) + s.slice(j + 1, s.length), par);
            }
        }
        return;
    }
    if(par[0] == ')'){
        remove(0, 0, ans, reverse(s), [par[1], par[0]]);
        return;
    }
    ans.push(reverse(s));
}

function reverse(s){
    var ret = "";
    for(var i = s.length - 1; i >= 0; i--){
        ret += s[i];
    }
    return ret;
}