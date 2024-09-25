class Solution {
public:
    vector<int> mostCompetitive(vector<int>& nums, int k) {
        vector<int> ans;
        int len = nums.size();
        for(int i = 0; i < len; i++){
            int remain = len - i;
            while(!ans.empty() && ans.size() + remain > k && ans.back() > nums[i]){
                ans.pop_back();
            }
            if(ans.size() < k){
                ans.push_back(nums[i]);
            }
        }
        return ans;
    }
};