1class Solution {
2public:
3    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
4        sort(arr.begin(), arr.end());
5        int min_diff = *(arr.end() - 1) - *(arr.begin());
6        vector<vector<int>> ans = {};
7        for(auto it = arr.begin(); it + 1 != arr.end(); it++){
8            min_diff = min(min_diff, *(it + 1) - *it);
9        }
10        for(auto it = arr.begin(); it + 1 != arr.end(); it++){
11            if(min_diff == *(it + 1) - *it){
12                ans.push_back({*it, *(it + 1)});
13            }
14        }
15        return ans;
16    }
17};