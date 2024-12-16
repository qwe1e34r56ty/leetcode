class Solution {
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        int size = nums.size();
        for(int i = 0; i < size; i++){
            pq.push({nums[i], i});
        }
        for(int i = 0; i < k; i++){
            const pair<int, int> p = pq.top();
            pq.pop();
            nums[p.second] *= multiplier;
            pq.push({nums[p.second], p.second});
        }
        return nums;
    }
};