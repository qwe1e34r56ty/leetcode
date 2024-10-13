class Solution {
public:
    int minGroups(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), less<vector<int>>());
        priority_queue<int, vector<int>, greater<int>> group;
        int ret = 0;
        for(auto i : intervals){
            if(!group.empty() && group.top() < i[0]){
                group.pop();
                group.push(i[1]);
            }
            else{
                group.push(i[1]);
                ret++;
            }
        }
        return ret;
    }
};