class Solution {
public:
    long long findScore(vector<int>& nums) {
        int size = nums.size();
        vector<int> marked(size, 0);
        auto comp = [](pair<int, int> a, pair<int, int> b){
            if(a.first == b.first){
                return a.second > b.second;
            }
            return a.first > b.first;
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(comp)> pq(comp);
        for(int i = 0; i < size; i++){
            pq.push({nums[i], i});
        }
        long long ans = 0;
        for(int i = 0; i < size; i++){
            auto tmp = pq.top();
            if(marked[tmp.second]){
                pq.pop();
                continue;
            }
            ans += tmp.first;
            marked[tmp.second] = 1;
            if(tmp.second - 1 >= 0){
                marked[tmp.second - 1] = 1;
            }
            if(tmp.second + 1 < size){
                marked[tmp.second + 1] = 1;
            }
            pq.pop();
        }
        return ans;
    }
};