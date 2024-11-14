class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        for(int i = 1; i < nums.size() - 1; i++){
            int j = 0;
            int k = nums.size() - 1;
            while((j < i) && (k > i)){
                if(nums[j] + nums[k] < -nums[i]) j++;
                if(nums[j] + nums[k] > -nums[i]) k--;
                while(j < i - 1 && nums[j] == nums[j + 1]) j++;
                while(i + 1 < k && nums[k - 1] == nums[k]) k--;
                if(nums[j] + nums[k] == -nums[i] && (j < i) && (k > i)){
                    ans.push_back({nums[j], nums[i], nums[k]});
                    j++;
                }
            }
        }
        sort(ans.begin(), ans.end());
        ans.erase(unique(ans.begin(), ans.end()), ans.end());
        return ans;
    }
};