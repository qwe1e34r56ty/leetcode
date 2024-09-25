class Solution {
public:
    int all(const vector<int>& nums, int k){
        int res = 0;
        int len = nums.size();
        unordered_map<int, int> count;
        for(int i = 0, j = 0; j < nums.size(); j++){
            if(!count[nums[j]]++) k--;
            while(k < 0){
                if(!--count[nums[i]])k++;
                i++;
            }
            res += j - i + 1;
        }
        return res;
    }
    int subarraysWithKDistinct(vector<int>& nums, int k) {
        return all(nums, k) - all(nums, k - 1);
    }
};