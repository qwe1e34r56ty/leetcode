class Solution {
public:
    int maxScoreSightseeingPair(vector<int>& values) {
        int len = values.size();
        vector<int> dp = vector<int>(len, 0);
        dp[0] = values[0];
        for(int i = 1; i < len; i++){
            dp[i] = values[i] + i;
            dp[i] = max(dp[i], dp[i - 1]);
        }
        int ret = 0;
        for(int i = 1; i < len; i++){
            ret = max(ret, values[i] - i + dp[i - 1]);
        }
        return ret;
    }
};