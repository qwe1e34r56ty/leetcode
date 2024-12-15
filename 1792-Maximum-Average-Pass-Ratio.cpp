class Solution {
public:
    double maxAverageRatio(vector<vector<int>>& classes, int extraStudents) {
        auto comp = [](const pair<int, int>& a, const pair<int, int>& b){
            return ((double)(a.first + 1) / (a.second + 1) - (double)a.first / a.second) <
            ((double)(b.first + 1) / (b.second + 1) - (double)b.first / b.second);
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(comp)> pq(comp);
        int size = classes.size();
        for(int i = 0; i < size; i++){
            pq.push({classes[i][0], classes[i][1]});
        }
        for(int i = 0; i < extraStudents; i++){
            pair<int, int> p = pq.top();
            p.first++;
            p.second++;
            pq.pop();
            pq.push(p);
        }
        double ans = 0;
        while(!pq.empty()){
            const pair<int, int> p = pq.top();
            ans += (double)p.first / p.second;
            pq.pop();
        }
        ans /= size;
        return ans;

    }
};