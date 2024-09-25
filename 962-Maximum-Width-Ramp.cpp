class Solution {
public:
    int maxWidthRamp(vector<int>& nums) {
        stack<int> st;
        int len = nums.size();
        int ans = 0;
        for(int i = 0; i < len; i++){
            if(st.empty() || nums[st.top()] > nums[i])
                st.push(i);
        }
        //cout << st.top() << endl;
        for(int i = len - 1; i >= 0; i--){
            while(!st.empty() && nums[st.top()] <= nums[i]){
                ans = max(ans, (i - st.top()));
                st.pop();
            }
        }
        return ans;
    }
};