1class Solution {
2public:
3    int countTriples(int n) {
4        int ans = 0;
5        for (int i = 1; i <= n; i++) {
6            for (int j = 1; j <= n; j++) {
7                int k = int(sqrt(i * i + j * j + 1.0));
8                if (k <= n && k * k == i * i + j * j) {
9                    ans++;
10                }
11            }
12        }
13        return ans;
14    }
15};