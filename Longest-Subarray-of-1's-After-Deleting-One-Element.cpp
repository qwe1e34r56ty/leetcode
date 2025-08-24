class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        vector<vector<int>> memo{2, vector<int>(nums.size(), 0)};
        int ret = 0;
        if(nums[0] == 1){
            memo[0][0] = 1;
            memo[1][0] = 0;
        }else{
            memo[0][0] = 0;
            memo[1][0] = 0;
        }
        for(int i = 1; i < nums.size(); i++){
            if(nums[i] == 1){
                memo[0][i] = memo[0][i - 1] + 1;
                memo[1][i] = max(memo[1][i - 1] + 1, memo[0][i - 1]);
            }else{
                memo[0][i] = 0;
                memo[1][i] = memo[0][i - 1];
            }
            ret = max(ret, memo[1][i]);
        }
        return ret;
    }
};