class Solution {
public:
    int all(vector<int>& nums, int k){
        if(k < 0){
            return 0;
        }
        int ans = 0;
        for(auto i = nums.begin(), j = nums.begin(); j != nums.end(); j++){
            if(*j == 1){
                k--;
            }
            while(k < 0){
                if(*i == 1){
                    k++;
                }
                i++;
            }
            ans += j - i + 1;
        }
        return ans;
    }
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        return all(nums, goal) - all(nums, goal - 1);
    }
};