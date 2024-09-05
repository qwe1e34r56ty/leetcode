var longestPalindrome = function(s) {
    var length = s.length;
    var start = 0;
    var max_length = 0;
    var str = "";
    var table = new Array(length);
    for(var i = 0; i < length; i++){
        table[i] = new Array(length);
    }
    for(var i = 0; i < length; i++){
        table[i][i] = 1;
        if(max_length < 1){
            max_length = 1;
            start = i;
        }
    }
    for(var i = 0; i < length - 1; i++){
        if(s[i] == s[i + 1]){
            table[i][i + 1] = 2;
            if(max_length < 2){
                max_length = 2;
                start = i;
            }
        }
    }
    for(var i = length - 2; i >= 0; i--){
        for(var j = i + 1; j < length; j++){
            if(table[i + 1][j - 1] > 0 && s[i] == s[j]){
                table[i][j] = table[i + 1][j - 1] + 2;
                if(max_length < j - i + 1){
                    max_length = j - i + 1;
                    start = i;
                }
            }
        }
    }
    for(var i = 0; i < max_length; i++){
        str += s[start + i];
    }
    return str;
};