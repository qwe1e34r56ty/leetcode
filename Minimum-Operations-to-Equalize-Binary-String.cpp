1class Solution {
2public:
3    int minOperations(string s, int k) {
4        int n = s.length();
5        int zero = 0;
6
7        for (char c : s)
8            if (c == '0') zero++;
9
10        if (zero == 0) return 0;
11
12        if (n == k) {
13            if (zero == n) return 1;
14            if (zero == 0) return 0;
15            return -1;
16        }
17
18        int one = n - zero;
19        int base = n - k;
20
21        int ans = INT_MAX;
22
23        if ((k % 2) == (zero % 2)) {
24            long long m = max(
25                (zero + k - 1) / k,
26                (one + base - 1) / base
27            );
28
29            if (m % 2 == 0) m++;
30
31            ans = min(ans, (int)m);
32        }
33
34        if (zero % 2 == 0) {
35            long long m = max(
36                (zero + k - 1) / k,
37                (zero + base - 1) / base
38            );
39
40            if (m % 2 == 1) m++;
41
42            ans = min(ans, (int)m);
43        }
44
45        return ans == INT_MAX ? -1 : ans;
46    }
47};