1class Solution {
2public:
3    int countTrapezoids(vector<vector<int>>& points) {
4        map<int, vector<int>> y;
5        int mod = pow(10, 9) + 7;
6        for(auto it = points.begin(); it != points.end(); it++){
7            y[(*it)[1]].push_back((*it)[0]);
8        }
9        long long ans = 0;
10        long long other = 0;
11        long long cur = 0;
12        vector<int>* cur_p;
13        other = 0;
14        for(auto it = y.begin(); it != y.end(); it++){
15            cur_p = &it->second;
16            cur = (cur_p->size() * (cur_p->size() - 1)) / 2;
17            ans += other * cur;
18            other += cur;
19            other %= mod;
20            ans %= mod;
21        }
22        cout << ans;
23        return ans;
24    }
25};