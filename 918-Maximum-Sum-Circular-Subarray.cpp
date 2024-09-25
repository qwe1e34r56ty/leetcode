#include<iostream>
#include<vector>
#include<algorithm>

class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int ans = 0;
        int sum = 0;
        int mid_min = pow(10, 9);
        int mid_max = -pow(10, 9);
        int cur = 0;
        int prefix_min = 0;
        int prefix_max = 0;
        for(auto i = nums.begin(); i != nums.end(); i++){
            if(i != nums.begin()){ 
                prefix_min = min(prefix_min, cur);
                prefix_max = max(prefix_max, cur);
            }
            cur += *i;
            sum += *i;
            if(i != nums.end() - 1){
                mid_min = min(mid_min, cur - prefix_max);
                mid_max = max(mid_max, cur - prefix_min);
            }
            //std::cout << sum - mid_min << " ";
            //std::cout << mid_max << " ";
        }
        if(nums.size() == 1){
            return sum;
        }
        return max(max(sum, sum - mid_min), mid_max);
    }
};