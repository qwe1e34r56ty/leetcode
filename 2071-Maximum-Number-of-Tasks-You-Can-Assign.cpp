class Solution {
public:
    int maxTaskAssign(vector<int>& tasks, vector<int>& workers, int pills, int strength) {
        sort(tasks.begin(), tasks.end(), [](int a, int b){return a > b;});
        sort(workers.begin(), workers.end(), [](int a, int b){return a > b;});
        int l = 0;
        int r = min(tasks.size(), workers.size());
        while(l < r){
            int m = (l + r + 1) / 2;
            int use = 0;
            multiset<int, greater<int>> w(workers.begin(), workers.begin() + m);
            for(int i = tasks.size() - m; i < tasks.size(); i++){
                if(*w.begin() < tasks[i]){
                    auto it = w.upper_bound(tasks[i] - strength);
                    if(it == w.begin() || ++use > pills){
                        break;
                    }
                    w.erase(prev(it));
                }
                else{
                    w.erase(w.begin());
                }
            }
            if (w.empty()){
                l = m;
            }
            else{
                r = m - 1;
            }
        }
        return l;
    }
};