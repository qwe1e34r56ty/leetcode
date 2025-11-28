1class Solution {
2public:
3    int maxKDivisibleComponents(int n, vector<vector<int>>& edges, vector<int>& values, int k) {
4        vector<vector<int>> adj(n);
5        vector<int> visited(n, 0);
6        for(const vector<int>& iv : edges){
7            adj[iv[0]].push_back(iv[1]);
8            adj[iv[1]].push_back(iv[0]);
9        }
10        return solve(n, adj, values, k, 0, visited).first;
11    }
12
13    pair<int, int> solve(int n, const vector<vector<int>>& adj, const vector<int>& values, int k, int cur, vector<int>& visited){
14        visited[cur] = 1;
15        int count = 0;
16        int remain = values[cur];
17        for(int i = 0; i < adj[cur].size(); i++){
18            if(!visited[adj[cur][i]]){
19                pair<int, int> ret = solve(n, adj, values, k, adj[cur][i], visited);
20                count += ret.first;
21                remain += ret.second;
22                remain %= k;
23            }
24        }
25        if(remain % k == 0){
26            count += 1;
27            remain = 0;
28        }
29        return {count, remain};
30    }
31};