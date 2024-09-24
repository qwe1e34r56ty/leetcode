class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        sort(points.begin(), points.end(), [](vector<int>& s, vector<int>& d){
            return s[0] > d[0];
        });
        int last = points[0][0];
        int ans = 1;
        for(auto& i : points)
            if(i[1] < last)
                last = i[0], ans++;
        return ans;
    }
};