class Solution {
public:
    int numOfWays(vector<int>& nums) {
        int len = nums.size();
        vector<vector<int>> dp(len, vector<int>(len + 1, 0));
        int mod = pow(10, 9) + 7;
        for(int i = 1; i < len; i++){
            dp[i][i] = 1;
            dp[i][0] = 1;
        }
        for(int i = 2; i < len; i++){
            for(int j = 1; j < i; j++){
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                dp[i][j] %= mod;
            }
        }
        return solve(nums, dp) - 1;
    }
    int solve(vector<int>& nums, vector<vector<int>>& dp){
        vector<int> left;
        vector<int> right;
        int len = nums.size();
        if(len <= 1){
            return 1;
        }
        int l_len = 0;
        int r_len = 0;
        for(int i = 1; i < len; i++){
            if(nums[i] < nums[0]){
                left.push_back(nums[i]);
                l_len++;
            }
            else{
                right.push_back(nums[i]);
                r_len++;
            }
        }
        long long ans = 1;
        int mod = pow(10, 9) + 7;
        ans *= solve(left, dp);
        ans %= mod;
        ans *= solve(right, dp);
        ans %= mod;
        ans *= dp[len - 1][l_len];
        ans %= mod;
        //cout << ans << endl;
        return ans;
    }
};