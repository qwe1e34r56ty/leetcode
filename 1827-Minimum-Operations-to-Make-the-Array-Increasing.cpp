class Solution {
public:
    int minOperations(vector<int>& nums) {
        int need = 1;
        int ans = 0;
        for(int i = 0; i < nums.size(); i++){
            need = max(need, nums[i]);
            ans += need - nums[i];
            need++;
        }
        return ans;
    }
};