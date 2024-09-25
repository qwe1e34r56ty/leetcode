class Solution {
public:
    string smallestSubsequence(string s, int k, char ch, int rep) {
        vector<char> st;
        int remain = 0;
        int s_len = s.size();
        for(int i = 0; i < s_len; i++){
            if(s[i] == ch){
                remain++;
            }
        }
        for(int i = 0; i < s_len; i++){
            while(!st.empty() && st.back() > s[i] && (s_len - i + st.size() > k) && (st.back() != ch || remain > rep)){
                if(st.back() == ch)
                    rep++;
                st.pop_back();
            }
            if(st.size() < k){
                if(s[i] == ch || (int)(k - st.size()) > rep){
                    st.push_back(s[i]);
                    if(s[i] == ch)
                        rep--;
                }
            }
            if(s[i] == ch)
                remain--;
        }
        return string(st.begin(), st.end());
    }
};