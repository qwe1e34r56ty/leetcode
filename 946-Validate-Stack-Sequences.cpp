class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        int n = pushed.size();
        for(int i = 0, j = 0; i < n; i++){
            st.push(pushed[i]);
            while(!st.empty() && st.top() == popped[j]){
                st.pop();
                j++;
                if(j == n){
                    return true;
                }
            }
        }
        return false;
    }
};