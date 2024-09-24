#include<iostream>
#include<deque>
#include<algorithm>
#include<vector>

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> queue;
        int len = nums.size();
        vector<int> answer(len - k + 1);
        for(int i = 0; i < len; i++){
            while(queue.size() != 0 && nums[queue.back()] < nums[i]){
                queue.pop_back();
            }
            queue.push_back(i);
            if(i >= k - 1){
                answer[i - k + 1] = nums[queue.front()];
            }
            //std::cout << answer[i - k + 1] << endl;
            if(queue.size() != 0 && queue.front() == i - k + 1){
                queue.pop_front();
            }
            /*for(auto i = queue.begin(); i != queue.end(); i++){
                std::cout << *i << " ";
            }
            std::cout << endl;*/
        }
        return answer;
    }
};