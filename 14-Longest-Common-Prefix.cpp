class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans = \\;
        int min_len = 200;
        for(const string& s : strs){
            min_len = min(min_len, (int32_t)s.length());
        }
        char tmp;
        for(int i = 0; i < min_len; i++){
            tmp = strs[0][i];
            for(const string& s : strs){
                if(s[i] != tmp){
                    return ans;
                }
            }
            ans += tmp;
        }
        return ans;
    }
};