class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        queue<int> q;
        int ans = 0;
        for(int i = 0; i < nums.size(); i++){
            while(!q.empty() && q.front() + 2 * k < nums[i]){
                q.pop();
            }
            if(q.empty()){
                ans = max(ans, 1);
            }
            else{
                ans = max(ans, (int)q.size() + 1);
            }
            q.push(nums[i]);
        }
        return ans;
    }
};