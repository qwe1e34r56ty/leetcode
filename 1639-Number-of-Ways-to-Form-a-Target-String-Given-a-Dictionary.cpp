class Solution {
public:
    int numWays(vector<string>& words, string target) {
        int mod = pow(10, 9) + 7;
        int w_total = words.size();
        int w_len = words[0].size();
        int t_len = target.size();
        vector<vector<int>> count(w_len, vector<int>(26, 0));
        vector<vector<long long>> dp(w_len, vector<long long>(t_len, 0));
        for(int i = 0; i < w_total; i++){
            for(int j = 0; j < w_len; j++){
                count[j][words[i][j] - 97]++; 
            }
        }
        for(int i = 0; i < t_len; i++){
            for(int j = 0; j < w_len; j++){
                if(i == 0){
                    dp[j][i] = count[j][target[i] - 97];
                }
                if(j != 0){
                    if(i != 0){
                        dp[j][i] = count[j][target[i] - 97] * dp[j - 1][i - 1];
                        dp[j][i] %= mod;
                    }
                    dp[j][i] += dp[j - 1][i];
                    dp[j][i] %= mod;
                }
            }
        }
        return dp[w_len - 1][t_len - 1];
    }
};