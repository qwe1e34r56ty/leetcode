class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        stack<int> st;
        int len = nums.size();
        vector<int> ans(len, -1);
        for(int i = 0; i < len; i++){
            while(!st.empty() && nums[st.top()] < nums[i]){
                ans[st.top()] = nums[i];
                st.pop();
            }
            st.push(i);
        }
        //cout << nums[st.top()];
        for(int i = 0; i < len; i++){
            while(!st.empty() && nums[st.top()] < nums[i]){
                ans[st.top()] = nums[i];
                st.pop();
            }
        }
        return ans;
    }
};