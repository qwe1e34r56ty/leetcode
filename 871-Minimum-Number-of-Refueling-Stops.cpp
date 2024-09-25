class Solution {
public:
    int minRefuelStops(int target, int startFuel, vector<vector<int>>& stations) {
        sort(stations.begin(), stations.end(), [](vector<int>& a, vector<int>& b){
            return a[0] < b[0];
        });
        multiset<int, greater<int>> recharge;
        for(auto i : stations){
            //cout << i[0] << endl;
        }
        int ans = 0;
        int next = startFuel;
        int i = 0;
        for(auto i : stations){
            while(next < i[0]){
                if(recharge.size() == 0){
                    return -1;
                }
                next += *recharge.begin();
                recharge.erase(recharge.begin());
                ans++;
            }
            recharge.insert(i[1]);
        }
        for(auto i : recharge){
            //cout << i << endl;
        }
        cout << ans;
        while(next < target){
            if(recharge.size() == 0){
                return -1;
            }
            next += *recharge.begin();
            recharge.erase(recharge.begin());
            ans++;
        }
        return ans;
    }
};