class Solution {
public:
    int count(const vector<int>& nums, int k){
        int res = 0;
        int cur = 0;
        for(auto start = nums.begin(), end = nums.begin(); end != nums.end(); end++){
            if(*end % 2){
                cur++;
            }
            while(cur > k){
                if(*start % 2){
                    cur--;
                }
                start++;
            }
            res += end - start + 1;
        }
        return res;
    }
    int numberOfSubarrays(vector<int>& nums, int k) {
        return count(nums, k) - count(nums, k - 1);
    }
};