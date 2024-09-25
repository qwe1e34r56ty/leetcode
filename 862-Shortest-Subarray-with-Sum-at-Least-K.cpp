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
        for(int i = 0; i < len; i++){
            nums[i] += (i > 0) ? nums[i - 1] : 0;
            if(nums[i] >= k){
                ans = min(ans, i + 1);
            }
            while(queue.size() && nums[i] - nums[queue.front()] >= k){
                ans = min(ans, i - queue.front());
                queue.pop_front();
            }
            while(queue.size() && nums[queue.back()] >= nums[i]){
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