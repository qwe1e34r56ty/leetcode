class Solution {
public:
    int power(vector<int>& nums, int l, int r){
        for(int i = l; i < r - 1; i++){
            if(nums[i] + 1 != nums[i + 1]){
                return -1;
            }
        }
        return nums[r - 1];
    }
    vector<int> resultsArray(vector<int>& nums, int k) {
        vector<int> ans(nums.size() - k + 1, 0);
        for(int i = 0; i < nums.size() - k + 1; i++){
            ans[i] = power(nums, i, i + k);
        }
        return ans;
    }
};