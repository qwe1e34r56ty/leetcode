class Solution {
public:
    int minimumTime(int n, vector<vector<int>>& relations, vector<int>& time) {
        vector<vector<int>> edge(n, vector<int>());
        vector<int> pre(n, 0);
        vector<int> cost(n, 0);
        queue<int> cur;
        int ans = 0;
        for(auto& i : relations){
            i[0]--;
            i[1]--;
            edge[i[0]].push_back(i[1]);
            pre[i[1]]++;
        };
        for(int i = 0; i < n; i++){
            if(!pre[i]){
                cur.push(i);
                cost[i] = time[i];
                ans = max(ans, cost[i]);
            }
        }
        while(cur.size()){
            int front = cur.front();
            //cout << front << endl;
            for(int i : edge[front]){
                if(!(--pre[i])){
                    cur.push(i);
                    //cout << i << endl;
                }
                cost[i] = max(cost[i], cost[front] + time[i]);
                ans = max(ans, cost[i]);
            }
            cur.pop();
        }
        //cout << ans;
        return ans;
    }
};