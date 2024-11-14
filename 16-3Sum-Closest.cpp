class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        int ans = nums[0] + nums[1] + nums[2];
        for(int i = 1; i < nums.size() - 1; i++){
            int j = 0;
            int k = nums.size() - 1;
            while(j < i && i < k){
                if(abs(ans - target) > abs(nums[j] + nums[i] + nums[k] - target)){
                    ans = nums[j] + nums[i] + nums[k];
                }
                if(nums[j] + nums[i] + nums[k] <= target){
                    j++;
                }else{
                    k--;
                }
            }
        }
        return ans;
    }
};