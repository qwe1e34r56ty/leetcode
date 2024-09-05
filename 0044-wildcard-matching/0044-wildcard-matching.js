/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var source;
var pattern;
var answer;
var isMatch = function(s, p) {
    source = s;
    pattern = p;
    source += "";
    pattern += "";
    answer = new Array(source.length);
    for(var i = 0; i < source.length; i++){
    	answer[i] = new Array(pattern.length);
    }
    for(var i = 0; i < source.length; i++){
        for(var j = 0; j < pattern.length; j++){
            answer[i][j] = -1;
        }
    }
    return dp(0, 0);
};

function dp(i, j){
    if(i >= source.length){
        if(j >= pattern.length){
            return 1;
        }
        else if(pattern[j] == '*'){
            return dp(i, j + 1);
        }
        else{
            return 0;
        }
    }
    else if(j >= pattern.length){
        return 0;
    }
    if(answer[i][j] != -1){
        return answer[i][j];
    }
	if(source[i] == pattern[j] || pattern[j] == "?"){
        answer[i][j] = dp(i + 1, j + 1);
    }
    else{
        if(pattern[j] == '*'){
            answer[i][j] = dp(i + 1, j) || dp(i, j + 1);
        }
        else{
            answer[i][j] = 0;
        }
    }
	return answer[i][j];
}