class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
        int i = 0;
        int j = 0;
        long long result = 0;
        for(;j < nums.size(); j++){
            if(nums[j] == 0){
                result += j - i + 1;
            }else{
                i = j + 1;
            }
        }
        return result;
    }
};