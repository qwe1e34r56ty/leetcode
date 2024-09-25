#include<iostream>
#include<vector>
#include<deque>
#include<algorithm>

class Solution {
public:
    int findMaxValueOfEquation(vector<vector<int>>& points, int k) {
        using std::cout;
        int ans = -1000000000;
        deque<vector<int>> queue;
        for(auto i = points.begin(); i != points.end(); i++){
            while(queue.size() && (*i)[0] - queue.front()[0] > k){
                queue.pop_front();
            }
            if(queue.size()){
                ans = max(ans, (*i)[0] - queue.front()[0] + (*i)[1] + queue.front()[1]);
            }
            while(queue.size() && (*i)[1] - (*i)[0] >= queue.back()[1] - queue.back()[0]){
                queue.pop_back();
            }
            queue.push_back(*i);
        }
        return ans;
    }
};