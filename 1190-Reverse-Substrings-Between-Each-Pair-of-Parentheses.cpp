class Solution {
public:
    string reverseParentheses(string s) {
        vector<int> st;
        string ans;
        //int n = s.length();
        for(int i = 0; i < s.length(); ++i){
            if(s[i] =='('){
                st.push_back(ans.length());
            }
            else if(s[i] == ')'){
                int j = st.back();
                st.pop_back();
                reverse(ans.begin() + j, ans.end());
            }
            else{
                ans += s[i];
            }
            //std::cout << ans << std::endl;
        }
        return ans;
    }
};