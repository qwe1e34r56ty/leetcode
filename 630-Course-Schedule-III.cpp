class Solution {
public:
    int scheduleCourse(vector<vector<int>>& courses) {
        sort(courses.begin(), courses.end(), [](vector<int>& a, vector<int>& b){
            return a[1] < b[1]; 
        });
        for(auto i : courses){
            //cout << i[0] << endl;
        }
        multimap<int, int, greater<int>> cur;
        int now = 0;
        int ans = 0;
        for(auto i : courses){
            now += i[0];
            ans++;
            cur.insert(pair<int, int>(i[0], i[1]));
            if(now > i[1]){
                now -= cur.begin()->first;
                cur.erase(cur.begin());
                ans--;
            }
        }
        for(auto i : cur){
            //cout << i.second << endl;
        }
        return ans;
    }
};