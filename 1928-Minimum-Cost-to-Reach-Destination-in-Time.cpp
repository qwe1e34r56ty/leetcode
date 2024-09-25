class Solution {
public:
    unordered_map<int,vector<pair<int,int>>> adj;
    int dp[1002][1002];
    int go(int sum,vector<int> &cost,int src=0)
    {
        if(sum<0)
            return INT_MAX-1000;
        if(src==cost.size()-1)
            return sum>=0?0:INT_MAX-1000;
        if(dp[sum][src]!=-1)
            return dp[sum][src];
        int res=INT_MAX-1000;
        for(auto i:adj[src])
        {
            res=min(res,cost[src]+go(sum-i.second,cost,i.first));
        }
        return dp[sum][src]=res;
    }
    int minCost(int maxTime, vector<vector<int>>& edges, vector<int>& cost) 
    {
        memset(dp,-1,sizeof(dp));
        adj.clear();
          for(auto i:edges)
          {
              adj[i[0]].push_back({i[1],i[2]});
              adj[i[1]].push_back({i[0],i[2]});
          }
        int ans=go(maxTime,cost);
        if(ans==2147482647)
            return -1;
        return cost[size(cost)-1]+ans;
    }
};