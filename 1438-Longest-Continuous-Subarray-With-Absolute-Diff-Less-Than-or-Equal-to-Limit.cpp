#include<iostream>
#include<vector>
#include<deque>
#include<algorithm>
#include<cmath>

class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
        int ans = 0;
        auto start = nums.begin();
        auto end = nums.begin();
        deque<int> max;
        deque<int> min;
        int len = nums.size();
        for(; end != nums.end(); end++){
            while(max.size() && max.back() < *end){
                max.pop_back();
            }
            while(min.size() && min.back() > *end){
                min.pop_back();
            }
            max.push_back(*end);
            min.push_back(*end);
            if(max.front() - min.front() > limit){
                if(max.front() == *start){
                    max.pop_front();
                }
                if(min.front() == *start){
                    min.pop_front();
                }
                start++;
            }
            //std::cout << end - start + 1 << endl;
        }
        return end - start;
    }
};