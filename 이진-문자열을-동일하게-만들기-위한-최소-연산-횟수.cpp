1class Solution {
2public:
3    int minOperations(string s, int k) {
4        int n = s.size(), m = 0;
5        vector<int> dist(n + 1, INT_MAX);
6        vector<set<int>> nodeSets(2);
7        for (int i = 0; i <= n; i++) {
8            nodeSets[i % 2].insert(i);
9            if (i < n && s[i] == '0') {
10                m++;
11            }
12        }
13        queue<int> q;
14        q.push(m);
15        dist[m] = 0;
16        nodeSets[m % 2].erase(m);
17        while (!q.empty()) {
18            m = q.front();
19            q.pop();
20            int c1 = max(k - n + m, 0), c2 = min(m, k);
21            int lnode = m + k - 2 * c2, rnode = m + k - 2 * c1;
22            auto& nodeSet = nodeSets[lnode % 2];
23            for (auto iter = nodeSet.lower_bound(lnode);
24                 iter != nodeSet.end() && *iter <= rnode;) {
25                int m2 = *iter;
26                dist[m2] = dist[m] + 1;
27                q.push(m2);
28                iter = next(iter);
29                nodeSet.erase(m2);
30            }
31        }
32        return dist[0] == INT_MAX ? -1 : dist[0];
33    }
34};