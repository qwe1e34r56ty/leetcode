1class Solution {
2public:
3    int maximizeSquareArea(int m, int n, vector<int>& hFences, vector<int>& vFences) {
4        const long long MOD = 1e9 + 7;
5
6        hFences.push_back(1);
7        hFences.push_back(m);
8        vFences.push_back(1);
9        vFences.push_back(n);
10
11        sort(hFences.begin(), hFences.end());
12        sort(vFences.begin(), vFences.end());
13
14        unordered_set<int> widths;
15        for (int i = 0; i < vFences.size(); i++) {
16            for (int j = i + 1; j < vFences.size(); j++) {
17                widths.insert(vFences[j] - vFences[i]);
18            }
19        }
20
21        long long maxLen = 0;
22        for (int i = 0; i < hFences.size(); i++) {
23            for (int j = i + 1; j < hFences.size(); j++) {
24                int len = hFences[j] - hFences[i];
25                if (widths.count(len)) {
26                    maxLen = max(maxLen, (long long)len);
27                }
28            }
29        }
30
31        if (maxLen == 0) return -1;
32        return (maxLen * maxLen) % MOD;
33    }
34};