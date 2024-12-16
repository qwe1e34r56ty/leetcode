class Solution {
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        auto comp = [](const pair<int, int>& a, const pair<int, int>& b){
            if(a.second == b.second){
                return a.first > b.first;
            }
            return a.second > b.second;
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(comp)> pq(comp);
        int size = nums.size();
        for(int i = 0; i < size; i++){
            pq.push({i, nums[i]});
        }
        for(int i = 0; i < k; i++){
            const pair<int, int> p = pq.top();
            pq.pop();
            nums[p.first] *= multiplier;
            pq.push({p.first, nums[p.first]});
        }
        return nums;
    }
};