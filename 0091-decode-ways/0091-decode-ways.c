

int numDecodings(char * s){
    int dp[101] = {};
    int len = 0;
    for(int i = 0; s[i] != 0; i++){
        len++;
    }
    if(s[0] == '0'){
        return 0;
    }
    dp[0] = 1;
    dp[1] = 1;
    for(int i = 2; i < len + 1; i++){
        if(s[i - 1] != '0'){
            dp[i] += dp[i - 1];
            if(s[i - 2] == '0'){
                continue;
            }
            else if(s[i - 2] == '1'){
                dp[i] += dp[i - 2];
            }
            else if(s[i - 2] == '2'){
                if(s[i - 1] >= '0' && s[i - 1] <= '6'){
                    dp[i] += dp[i - 2];
                }
            }
        }
        else{
            if(s[i - 2] == '0' || s[i - 2] >= '3'){
                return 0;
            }
            dp[i] = dp[i - 2];
        }
    }
    return dp[len];
}