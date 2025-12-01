1class Solution {
2public:
3    long long maxRunTime(int n, vector<int>& batteries) {
4        sort(batteries.begin(), batteries.end());
5        long extra = 0;
6        for(int i = 0; i < batteries.size() - n; i++){
7            extra += batteries[i];
8        }
9        vector<int> live = vector<int>(batteries.end() - n, batteries.end());
10
11        for (int i = 0; i < n - 1; i++) {
12            if (extra < (long)(i + 1) * (live[i + 1] - live[i])) {
13                return live[i] + extra / (long)(i + 1);
14            }
15            extra -= (long)(i + 1) * (live[i + 1] - live[i]);
16        }
17
18        return live[n - 1] + extra / n;
19    }
20};