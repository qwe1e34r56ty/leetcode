class Solution {
public:
    int intersectionSizeTwo(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](vector<int>& s, vector<int>& d){
            if(d[0] == s[0]){
                return d[1] > s[1];
            }
            return d[0] < s[0];
        });
        int a = intervals[0][0];
        int b = intervals[0][0] + 1;
        int ans = 2;
        for(auto i : intervals){
            if(i[0] <= a && i[1] >= b);
            else{
                if(i[1] < a){
                    a = i[0];
                    b = i[0] + 1;
                    ans += 2;
                }
                else{
                    b = a;
                    a = i[0];
                    ans++;
                }
            }
            //cout << a << " " << b << endl;
        }
        return ans;
    }
};