#include<iostream>
#include<vector>
#include<deque>
#include<algorithm>


class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {
        deque<int> queue;
        int len = nums.size();
        int ans = len + 1;
        vector<long long> nums_l(nums.size(), 0);
        for(int i = 0; i < nums.size(); i++){
            nums_l[i] = nums[i];
        }
        for(int i = 0; i < len; i++){
            nums_l[i] += (i > 0) ? nums_l[i - 1] : 0;
            if(nums_l[i] >= k){
                ans = min(ans, i + 1);
            }
            while(queue.size() && nums_l[i] - nums_l[queue.front()] >= k){
                ans = min(ans, i - queue.front());
                queue.pop_front();
            }
            while(queue.size() && nums_l[queue.back()] >= nums_l[i]){
                queue.pop_back();
            }
            queue.push_back(i);
        }
        if(ans == len + 1){
            ans = -1;
        }
        return ans;
    }
};
