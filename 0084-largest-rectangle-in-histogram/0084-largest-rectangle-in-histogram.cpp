class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int ans = 0;
        int n = heights.size();
        for(int i = 0; i <= n; i++){
            while(!st.empty() && (i == n || heights[st.top()] > heights[i])){
                int top = st.top(); st.pop();
                ans = max(ans, heights[top] * (i - 1 - ((!st.empty() ? st.top() : -1))));
            }
            st.push(i);
            //std::cout << ans << std::endl;
        }
        return ans;
    }
};