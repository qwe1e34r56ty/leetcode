class Solution {
public:
    int maxKDivisibleComponents(int n, vector<vector<int>>& edges, vector<int>& values, int k) {
        vector<vector<int>> adj(n);
        vector<int> visited(n, 0);
        for(const vector<int>& iv : edges){
            adj[iv[0]].push_back(iv[1]);
            adj[iv[1]].push_back(iv[0]);
        }
        return solve(n, adj, values, k, 0, visited).first;
    }

    pair<int, int> solve(int n, const vector<vector<int>>& adj, const vector<int>& values, int k, int cur, vector<int>& visited){
        visited[cur] = 1;
        int count = 0;
        int remain = values[cur];
        for(int i = 0; i < adj[cur].size(); i++){
            if(!visited[adj[cur][i]]){
                pair<int, int> ret = solve(n, adj, values, k, adj[cur][i], visited);
                count += ret.first;
                remain += ret.second;
                remain %= k;
            }
        }
        if(remain % k == 0){
            count += 1;
            remain = 0;
        }
        return {count, remain};
    }
};