class Solution {
public:
    vector<bool> isArraySpecial(vector<int>& nums, vector<vector<int>>& queries) {
        for(auto& i : nums){
            i = i % 2;
        }
        vector<int> prefix(nums.size(), 0);
        for(int i = 1; i < nums.size(); i++){
            prefix[i] = prefix[i - 1];
            if(nums[i] != nums[i - 1]){
                prefix[i]++;
            }
        }
        vector<bool> ans;
        for(const vector<int>& q : queries){
            if(q[1] - q[0] == prefix[q[1]] - prefix[q[0]]){
                ans.push_back(true);
            }else{
                ans.push_back(false);
            }
        }
        return ans;
    }
};