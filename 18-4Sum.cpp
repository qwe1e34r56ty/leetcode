class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, long long target) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        for(int i = 0; i < nums.size(); i++){
            for(int j = i + 2; j < nums.size() - 1; j++){
                int k = i + 1;
                int l = nums.size() - 1;
                while(k < j && j < l){
                    if((long long)nums[i] + nums[k] + nums[j] + nums[l] == target){
                        ans.push_back({nums[i], nums[k], nums[j], nums[l]});
                    }
                    if(k < j && (long long)nums[i] + nums[j] + nums[k] + nums[l] <= target) k++;
                    if(j < l && (long long)nums[i] + nums[j] + nums[k] + nums[l] > target) l--;
                    while(k < j - 1 && nums[k] == nums[k + 1]) k++;
                    while(j + 1 < l && nums[l - 1] == nums[l]) l--;
                }
            }
        }
        sort(ans.begin(), ans.end());
        ans.erase(unique(ans.begin(), ans.end()), ans.end());
        return ans;
    }
};