class Solution {
public:
    int numberWays(vector<vector<int>>& hats) {
        int ans = 0;
        int mod = pow(10, 9) + 7;
        map<int, vector<int>> prefer;
        int n = hats.size();
        for(int i = 0; i < n; i++){
            for(auto j : hats[i]){
                prefer[j].push_back(i);
            }
        }
        vector<vector<int>> dp(41, vector<int>(1 << n, 0));
        for(auto i = prefer.begin(); i != prefer.end(); i++){
            int cur = i->first;
            for(auto& j : i->second){
                dp[cur][1 << j] = 1;
            }
            if(i != prefer.begin()){
                int pre = prev(i)->first;
                for(auto& j : i->second){
                    for(int k = ((1 << n) - 1) & ~(1 << j); k > 0; k = (k - 1) & ~(1 << j)){
                        dp[cur][k | (1 << j)] += dp[pre][k];
                        dp[cur][k | (1 << j)] %= mod;
                    }
                }
                for(int k = 0; k < (1 << n); k++){
                    dp[cur][k] += dp[pre][k];
                    dp[cur][k] %= mod;
                }
            }
        }
        return dp[prefer.rbegin()->first][(1 << n) - 1];
    }
};