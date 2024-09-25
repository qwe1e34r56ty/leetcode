class Solution {
public:
    int maxValueAfterReverse(vector<int>& nums) {
        int res = 0;
        int min2 = 100001;
        int max2 = 0;
        int total = 0;
        for(int i = 0; i < nums.size() - 1; i++){
            total += abs(nums[i] - nums[i + 1]);
            res = max(res, abs(nums[0] - nums[i + 1]) - abs(nums[i] - nums[i + 1]));
            res = max(res, abs(nums[nums.size() - 1] - nums[i]) - abs(nums[i] - nums[i + 1]));
            min2 = min(min2, max(nums[i], nums[i + 1]));
            max2 = max(max2, min(nums[i], nums[i + 1]));
        }
        return total + max(res, (max2 - min2) * 2);
    }
};