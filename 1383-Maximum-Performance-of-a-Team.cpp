class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        vector<vector<long long>> arr(n, vector<long long>(2));
        for(int i = 0; i < n; i++){
            arr[i][0] = speed[i];
            arr[i][1] = efficiency[i];
        }
        sort(arr.begin(), arr.end(),
             [](vector<long long>& d, vector<long long>& s){
                 if(d[1] == s[1]){
                     return s[0] < d[0];
                 }
                 return d[1] > s[1];
             });
        multiset<long long> now;
        long long ans = 0;
        long long cur_speed = 0;
        for(auto i : arr){
            now.insert(i[0]);
            cur_speed += i[0];
            ans = max(ans, cur_speed * i[1]);
            if(now.size() == k){
                cur_speed -= *now.begin();
                now.erase(now.begin());
            }
            //cout << ans << endl;
        }
        /*for(auto i : arr){
            cout << i[0] << " " << i[1] << endl;
        }*/
        return ans % int(pow(10, 9) + 7);
    }
};